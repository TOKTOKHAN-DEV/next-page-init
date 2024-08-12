const [first, second, ...args] = process.argv
const [prNumber, templateName, publishPackages] = args

type Pkgs = { name: string; version: string }[]
const pkgs: Pkgs = JSON.parse(publishPackages)

const DOMAIN = 'https://github.com/TOKTOKHAN-DEV'

const WEBHOOK_URL =
  'https://hooks.slack.com/services/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' ||
  process.env.SLACK_WEBHOOK_URL

if (!WEBHOOK_URL) {
  throw new Error('WEBHOOK_URL is missing or not configured.')
}

const pkgInfo = pkgs?.map((item) => `${item.name}@${item.version}`)[0]

const title = [
  {
    type: 'header',
    text: {
      type: 'plain_text',
      text: `:meow_code: ${templateName} 템플릿이 배포되었습니다.`,
      emoji: true,
    },
  },
]

const body = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `*${pkgInfo}*`,
    },
    accessory: {
      type: 'button',
      text: {
        type: 'plain_text',
        text: ':meow_bread_appear: 변경사항 보기',
        emoji: true,
      },
      value: 'update detail info',
      url: `${DOMAIN}/${templateName}/releases/tag/v${pkgs[0].version}`,
      action_id: 'button-action',
    },
  },
]

const content = {
  unfurl_links: false,
  blocks: [...title, ...body],
}

namespace NextPageInitRepo {
  export async function sendToWebhook(url: string, data: any) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Fetch error! Status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error in sendToWebhook:', error)
      throw error
    }
  }

  export async function notifySlack(content: any) {
    try {
      await sendToWebhook(WEBHOOK_URL, content)
    } catch (error) {
      console.error('Error in notifySlack:', error)
    }
  }
}

NextPageInitRepo.notifySlack(content)

export {}
