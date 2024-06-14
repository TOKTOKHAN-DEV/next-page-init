import { RootConfig } from '@toktokhan-dev/cli'
import { commit } from '@toktokhan-dev/cli-plugin-commit'
import { genApi } from '@toktokhan-dev/cli-plugin-gen-api-react-query'
import { genIcon } from '@toktokhan-dev/cli-plugin-gen-icon-chakra'
import { genImg } from '@toktokhan-dev/cli-plugin-gen-img'
import { genRoutePage } from '@toktokhan-dev/cli-plugin-gen-route-pages'
import { genTheme } from '@toktokhan-dev/cli-plugin-gen-theme-chakra'

const config: RootConfig<{
  plugins: [
    typeof genImg,
    typeof genRoutePage,
    typeof genApi,
    typeof genTheme,
    typeof genIcon,
    typeof commit,
  ]
}> = {
  plugins: [genImg, genRoutePage, genApi, genTheme, genIcon, commit],
  'gen:img': {
    input: 'public/images',
    oneDepth: true,
  },
  'gen:route': {
    oneDepth: true,
  },
  'gen:api': {
    swaggerSchemaUrl: 'https://sales-api-dev.pluuug.com/openapi.json/',
  },
  'gen:theme': {},
  'gen:icon': {
    input: 'public/icons',
  },
}
export default config
