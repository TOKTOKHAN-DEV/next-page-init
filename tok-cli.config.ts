import { RootConfig } from '@toktokhan-fe/cli'
import { genApi } from '@toktokhan-fe/cli-plugin-gen-api-react-query'
import { genIcon } from '@toktokhan-fe/cli-plugin-gen-icon-chakra'
import { genImg } from '@toktokhan-fe/cli-plugin-gen-img'
import { genRoutePage } from '@toktokhan-fe/cli-plugin-gen-route-pages'
import { genTheme } from '@toktokhan-fe/cli-plugin-gen-theme-chakra'

const config: RootConfig<{
  plugins: [
    typeof genImg,
    typeof genRoutePage,
    typeof genApi,
    typeof genTheme,
    typeof genIcon,
  ]
}> = {
  plugins: [genImg, genRoutePage, genApi, genTheme, genIcon],
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
