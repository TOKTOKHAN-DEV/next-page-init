import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs'
import path from 'path'

import { sheets_v4 } from 'googleapis'

type genTranslationConfig = {
  sheetId: string
  outputDir: string
  name: string
}

type SpreadErrorType = {
  response: {
    data: {
      message: string
    }
  }
}

export const generateTranslation = async (
  spreadsheets: sheets_v4.Resource$Spreadsheets,
  config: genTranslationConfig,
  spinner?: { info: (content: string) => void },
) => {
  const getSheets = createSheetsGetter(spreadsheets)
  const getSheetData = createSheetDataGetter(spreadsheets)
  const sheets = await getSheets(config.sheetId)
  sheets?.forEach(async (sheet) => {
    const { title } = sheet || { undefined }
    if (title) {
      const sheetData = await getSheetData(config.sheetId, title)
      // 라벨과 데이터 값 분리
      const languages = sheetData?.shift()
      const length = languages?.length || 0
      // 키 컬럼은 제외
      for (let i = 1; i < length; i++) {
        const language = languages?.[i]
        const translation: { [key in string]: string } = {}
        const filePath = path.resolve(
          `${config.outputDir}/${language}`,
          `${title}.json`,
        )
        sheetData?.map((cell: string[]) => {
          const key = cell[0] || cell[1]
          const value = cell[i]
          translation[key] = value
        })
        writeFile(filePath, JSON.stringify(translation, null, 2))
        if (spinner) spinner.info(`generated:${filePath}`)
      }
    }
  })
}

export const initOutputFolder = (outputDirPath: string) => {
  if (existsSync(outputDirPath))
    rmSync(outputDirPath, { recursive: true, force: true })
}

export const writeFile = (filePath: string, data: string) => {
  try {
    const dirPath = path.dirname(filePath)
    const isExistsDir = existsSync(dirPath)
    if (isExistsDir) {
      writeFileSync(filePath, data)
    } else {
      mkdirSync(dirPath, { recursive: true })
      writeFileSync(filePath, data)
    }
  } catch (error) {
    throw Error('invalid output file path')
  }
}

export const createSheetsGetter =
  (spreadsheets: sheets_v4.Resource$Spreadsheets) =>
  (
    spreadsheetId: string,
  ): Promise<sheets_v4.Schema$Sheet['properties'][] | undefined> => {
    return new Promise((resolve, reject) => {
      spreadsheets.get({ spreadsheetId }, (err, res) => {
        if (err) reject(err)
        else
          resolve(res?.data?.sheets?.map((sheet) => ({ ...sheet.properties })))
      })
    })
  }

export const createSheetDataGetter =
  (spreadsheets: sheets_v4.Resource$Spreadsheets) =>
  (
    spreadsheetId: string,
    range: string,
  ): Promise<sheets_v4.Schema$ValueRange['values'] | undefined> => {
    return new Promise((resolve, reject) => {
      spreadsheets.values.get({ spreadsheetId, range }, (err, res) => {
        if (err) reject(err)
        else resolve(res?.data?.values)
      })
    })
  }

export const isSpreadErrorType = (error: any): error is SpreadErrorType => {
  return (
    error &&
    typeof error === 'object' &&
    'response' in error &&
    typeof error.response === 'object' &&
    'data' in error.response &&
    typeof error.response.data === 'object' &&
    'message' in error.response.data &&
    typeof error.response.data.message === 'string'
  )
}
