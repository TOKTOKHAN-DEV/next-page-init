import path from 'path'

import { defineCommand } from '@toktokhan-dev/cli'
import { withLoading } from '@toktokhan-dev/node'

import { google } from 'googleapis'

import { API_KEY } from './gen-translation-api-key.json'
import {
  generateTranslation,
  initOutputFolder,
  isSpreadErrorType,
} from './genTranslation'

type genTranslationConfig = {
  sheetId: string
  outputDir: string
  name: string
}

const TRANSLATION_OUTPUT_DIR_PATH = path.resolve('./src/generated/locales')

export const genTranslation = defineCommand<
  'gen:translation',
  genTranslationConfig
>({
  name: 'gen:translation',
  default: {
    sheetId: '1GrsUdgPDOyn2f2QWCcK6fp2b_5phkE7fLPdsFUAzlXM',
    outputDir: TRANSLATION_OUTPUT_DIR_PATH,
  },
  cliOptions: [{ name: 'sheetId', alias: 'i' }],
  description:
    '등록된 다국어 구글 시트에 정보를 토대로 다국어 json을 생성합니다.',
  run: async (config) => {
    try {
      if (!config.sheetId) {
        throw Error('sheetId를 설정해주세요')
      }
      const { spreadsheets } = google.sheets({
        version: 'v4',
        auth: API_KEY,
      })
      initOutputFolder(config.outputDir)
      withLoading('Generate Translation JSON', '', (spinner) => {
        generateTranslation(spreadsheets, config, spinner)
      })
    } catch (error: unknown) {
      if (isSpreadErrorType(error)) {
        console.log(error.response.data.message)
      } else console.log(error)
    }
  },
})
