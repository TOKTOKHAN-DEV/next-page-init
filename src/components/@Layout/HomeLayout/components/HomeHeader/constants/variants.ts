import { ChakraProps } from '@chakra-ui/react'

export type HomeHeaderVariantType = 'dark' | 'light' | 'transparent'
export const HOME_HEADER_VARIANTS: Record<
  HomeHeaderVariantType,
  {
    header: ChakraProps
    drawer: ChakraProps
    pointColor: ChakraProps['color']
    subColor: ChakraProps['color']
  }
> = {
  dark: {
    header: { bg: '' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'background.brand',
  },
  light: {
    header: { bg: 'background.brand' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'background.primary',
  },
  transparent: {
    header: { bg: 'transparent' },
    drawer: { bg: 'white' },
    pointColor: 'black',
    subColor: 'ter',
  },
}
