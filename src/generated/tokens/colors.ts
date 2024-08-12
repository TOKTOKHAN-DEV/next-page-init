/**
 * !DO NOT EDIT THIS FILE
 *
 * gnerated by script: tokript gen:theme
 *
 * theme color 를 정의하는 곳입니다.
 * dark 모드를 대응하기 위해 semantic token 을 사용해서 정의합니다.
 *
 * @see https://chakra-ui.com/docs/styled-system/semantic-tokens
 **/

export const colorSchema = {
  'common.white': '#ffffff',
  'common.black': '#000000',
  'grey.50': '#fafafa',
  'grey.100': '#f5f5f5',
  'grey.200': '#ececec',
  'grey.300': '#d9d9d9',
  'grey.400': '#aeaeae',
  'grey.500': '#8f8f8f',
  'grey.600': '#767676',
  'grey.700': '#555555',
  'grey.800': '#333333',
  'grey.900': '#171717',
  'green.50': '#e0ffeb',
  'green.100': '#bef4d0',
  'green.200': '#7ee29f',
  'green.300': '#4bce77',
  'green.400': '#2abb5a',
  'green.500': '#22a04c',
  'green.600': '#1f8441',
  'green.700': '#216e3b',
  'green.800': '#174f2a',
  'green.900': '#171717',
  'yellow.50': '#fef7d7',
  'yellow.100': '#fcf1b5',
  'yellow.200': '#fae161',
  'yellow.300': '#f9d414',
  'yellow.400': '#efb806',
  'yellow.500': '#d7a204',
  'yellow.600': '#a67d03',
  'yellow.700': '#896601',
  'yellow.800': '#644c02',
  'yellow.900': '#171717',
  'blue.50': '#e9f2ff',
  'blue.100': '#cce0ff',
  'blue.200': '#84b8ff',
  'blue.300': '#579dff',
  'blue.400': '#388bff',
  'blue.500': '#1d7afc',
  'blue.600': '#0c66e4',
  'blue.700': '#0055cc',
  'blue.800': '#09326c',
  'blue.900': '#1c2b41',
  'red.50': '#fff1f0',
  'red.100': '#ffd5d2',
  'red.200': '#fd9891',
  'red.300': '#f87168',
  'red.400': '#f15b50',
  'red.500': '#e2483d',
  'red.600': '#c9372c',
  'red.700': '#c9372c',
  'red.800': '#5d1f1a',
  'red.900': '#171717',
  'pink.50': '#fff0f1',
  'pink.100': '#fdd0d5',
  'pink.200': '#f995a0',
  'pink.300': '#f76476',
  'pink.400': '#ec5063',
  'pink.500': '#d94456',
  'pink.600': '#ce273b',
  'pink.700': '#bc1528',
  'pink.800': '#65101a',
  'pink.900': '#171717',
  'violet.50': '#f3f0ff',
  'violet.100': '#dfd8fd',
  'violet.200': '#b8acf6',
  'violet.300': '#9f8fef',
  'violet.400': '#8f7ee7',
  'violet.500': '#8270db',
  'violet.600': '#6e5dc6',
  'violet.700': '#5e4db2',
  'violet.800': '#352c63',
  'violet.900': '#171717',
  'brand.50': '#e3edff',
  'brand.100': '#c3d7ff',
  'brand.200': '#acbbfa',
  'brand.300': '#7f94f1',
  'brand.400': '#6271ff',
  'brand.500': '#4850ff',
  'brand.600': '#232ce4',
  'brand.700': '#0007b0',
  'brand.800': '#0c1f6f',
  'brand.900': '#001053',
  'white.transparent.50': '#ffffffD',
  'white.transparent.100': '#ffffff1A',
  'white.transparent.200': '#ffffff33',
  'white.transparent.300': '#ffffff4D',
  'white.transparent.400': '#ffffff66',
  'white.transparent.500': '#ffffff80',
  'white.transparent.600': '#ffffff99',
  'white.transparent.700': '#ffffffB2',
  'white.transparent.800': '#ffffffCC',
  'white.transparent.900': '#ffffffE5',
  'grey.transparent.50': '#000000D',
  'grey.transparent.100': '#0000001A',
  'grey.transparent.200': '#00000033',
  'grey.transparent.300': '#0000004D',
  'grey.transparent.400': '#00000066',
  'grey.transparent.500': '#00000080',
  'grey.transparent.600': '#00000099',
  'grey.transparent.700': '#000000B2',
  'grey.transparent.800': '#000000CC',
  'grey.transparent.900': '#000000E5',
}

export const colors = {
  'background.secondary.hover': {
    default: colorSchema['grey.200'],
    _dark: colorSchema['grey.600'],
  },
  'button.tertiary.active': {
    default: colorSchema['grey.200'],
    _dark: colorSchema['grey.600'],
  },
  'border.brand': {
    default: colorSchema['brand.500'],
    _dark: colorSchema['brand.300'],
  },
  'background.brand.active': {
    default: colorSchema['brand.300'],
    _dark: colorSchema['brand.200'],
  },
  'background.primary.hover': {
    default: colorSchema['grey.200'],
    _dark: colorSchema['grey.700'],
  },
  'button.primary.hover': {
    default: colorSchema['brand.700'],
    _dark: colorSchema['brand.200'],
  },
  'background.primary.active': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.600'],
  },
  'support.warning.subtle': {
    default: colorSchema['yellow.50'],
    _dark: colorSchema['yellow.50'],
  },
  'text.primary.inverse': {
    default: colorSchema['common.white'],
    _dark: colorSchema['grey.900'],
  },
  'text.secondary.inverse': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.600'],
  },
  'field.disabled': {
    default: colorSchema['grey.200'],
    _dark: colorSchema['grey.600'],
  },
  'text.secondary': {
    default: colorSchema['grey.600'],
    _dark: colorSchema['grey.400'],
  },
  'field.solid': {
    default: colorSchema['grey.100'],
    _dark: colorSchema['grey.400'],
  },
  'background.inverse.active': {
    default: colorSchema['grey.400'],
    _dark: colorSchema['grey.200'],
  },
  'background.secondary': {
    default: colorSchema['grey.100'],
    _dark: colorSchema['grey.800'],
  },
  'support.success.accent': {
    default: colorSchema['green.700'],
    _dark: colorSchema['green.700'],
  },
  'button.secondary.hover': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.500'],
  },
  'background.brand': {
    default: colorSchema['brand.50'],
    _dark: colorSchema['brand.400'],
  },
  'icon.disabled.on': {
    default: colorSchema['grey.400'],
    _dark: colorSchema['grey.400'],
  },
  'badge.green.subtle': {
    default: colorSchema['green.50'],
    _dark: colorSchema['green.50'],
  },
  'support.warning': {
    default: colorSchema['yellow.300'],
    _dark: colorSchema['yellow.300'],
  },
  'icon.primary.inverse': {
    default: colorSchema['common.white'],
    _dark: colorSchema['common.white'],
  },
  'badge.violet.subtle': {
    default: colorSchema['violet.50'],
    _dark: colorSchema['violet.50'],
  },
  'background.inverse.hover': {
    default: colorSchema['grey.600'],
    _dark: colorSchema['grey.100'],
  },
  'text.quaternary': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.700'],
  },
  'background.brand.hover': {
    default: colorSchema['brand.200'],
    _dark: colorSchema['brand.300'],
  },
  'badge.violet': {
    default: colorSchema['violet.600'],
    _dark: colorSchema['violet.600'],
  },
  'background.overlay': {
    default: colorSchema['grey.transparent.500'],
    _dark: colorSchema['grey.transparent.500'],
  },
  'border.active': {
    default: colorSchema['grey.800'],
    _dark: colorSchema['common.white'],
  },
  'badge.grey.subtle': {
    default: colorSchema['grey.200'],
    _dark: colorSchema['grey.200'],
  },
  'text.tertiary.inverse': {
    default: colorSchema['grey.600'],
    _dark: colorSchema['grey.400'],
  },
  'support.info': {
    default: colorSchema['blue.500'],
    _dark: colorSchema['blue.500'],
  },
  'background.inverse': {
    default: colorSchema['grey.800'],
    _dark: colorSchema['grey.100'],
  },
  'support.success': {
    default: colorSchema['green.400'],
    _dark: colorSchema['green.400'],
  },
  'background.brand.inverse.active': {
    default: colorSchema['brand.800'],
    _dark: colorSchema['brand.300'],
  },
  'text.disabled.on': {
    default: colorSchema['grey.400'],
    _dark: colorSchema['grey.500'],
  },
  'button.disabled': {
    default: colorSchema['grey.200'],
    _dark: colorSchema['grey.600'],
  },
  'icon.secondary': {
    default: colorSchema['grey.600'],
    _dark: colorSchema['grey.600'],
  },
  'border.selected': {
    default: colorSchema['brand.500'],
    _dark: colorSchema['brand.300'],
  },
  'text.tertiary': {
    default: colorSchema['grey.400'],
    _dark: colorSchema['grey.600'],
  },
  'border.secondary': {
    default: colorSchema['grey.200'],
    _dark: colorSchema['grey.400'],
  },
  'text.disabled': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.600'],
  },
  'field.line': {
    default: colorSchema['common.white'],
    _dark: colorSchema['grey.800'],
  },
  'background.primary': {
    default: colorSchema['common.white'],
    _dark: colorSchema['grey.700'],
  },
  'badge.blue': {
    default: colorSchema['blue.500'],
    _dark: colorSchema['blue.500'],
  },
  'button.primary': {
    default: colorSchema['brand.500'],
    _dark: colorSchema['brand.400'],
  },
  'badge.grey': {
    default: colorSchema['grey.800'],
    _dark: colorSchema['grey.800'],
  },
  'background.brand.inverse': {
    default: colorSchema['brand.500'],
    _dark: colorSchema['brand.50'],
  },
  'button.secondary.active': {
    default: colorSchema['grey.400'],
    _dark: colorSchema['grey.400'],
  },
  'support.error': {
    default: colorSchema['red.500'],
    _dark: colorSchema['red.500'],
  },
  'support.error.accent': {
    default: colorSchema['red.600'],
    _dark: colorSchema['red.600'],
  },
  'border.primary': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.700'],
  },
  'background.secondary.selected': {
    default: colorSchema['brand.50'],
    _dark: colorSchema['brand.400'],
  },
  'badge.pink': {
    default: colorSchema['pink.500'],
    _dark: colorSchema['pink.500'],
  },
  'background.brand.inverse.hover': {
    default: colorSchema['brand.700'],
    _dark: colorSchema['brand.200'],
  },
  'support.interactive.blue': {
    default: colorSchema['brand.500'],
    _dark: colorSchema['brand.500'],
  },
  'button.tertiary': {
    default: colorSchema['common.white'],
    _dark: colorSchema['grey.900'],
  },
  'badge.yellow': {
    default: colorSchema['yellow.700'],
    _dark: colorSchema['yellow.700'],
  },
  'button.tertiary.hover': {
    default: colorSchema['grey.100'],
    _dark: colorSchema['grey.700'],
  },
  'icon.tertiary': {
    default: colorSchema['grey.400'],
    _dark: colorSchema['grey.400'],
  },
  'text.primary': {
    default: colorSchema['grey.900'],
    _dark: colorSchema['common.white'],
  },
  'background.primary.selected': {
    default: colorSchema['brand.50'],
    _dark: colorSchema['brand.400'],
  },
  'icon.secondary.inverse': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.300'],
  },
  'support.interactive.pink': {
    default: colorSchema['pink.300'],
    _dark: colorSchema['pink.300'],
  },
  'background.secondary.active': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.500'],
  },
  'badge.green': {
    default: colorSchema['green.600'],
    _dark: colorSchema['green.600'],
  },
  'badge.yellow.subtle': {
    default: colorSchema['yellow.50'],
    _dark: colorSchema['yellow.50'],
  },
  'support.success.subtle': {
    default: colorSchema['green.50'],
    _dark: colorSchema['green.50'],
  },
  'icon.disabled': {
    default: colorSchema['grey.300'],
    _dark: colorSchema['grey.300'],
  },
  'support.interactive.purple': {
    default: colorSchema['violet.400'],
    _dark: colorSchema['violet.400'],
  },
  'button.secondary': {
    default: colorSchema['grey.100'],
    _dark: colorSchema['grey.600'],
  },
  'support.error.subtle': {
    default: colorSchema['red.50'],
    _dark: colorSchema['red.50'],
  },
  'text.disabled.inverse': {
    default: colorSchema['grey.700'],
    _dark: colorSchema['grey.300'],
  },
  'badge.blue.subtle': {
    default: colorSchema['blue.50'],
    _dark: colorSchema['blue.50'],
  },
  'icon.primary': {
    default: colorSchema['grey.900'],
    _dark: colorSchema['grey.900'],
  },
  'button.primary.active': {
    default: colorSchema['brand.800'],
    _dark: colorSchema['brand.100'],
  },
  'badge.pink.subtle': {
    default: colorSchema['pink.50'],
    _dark: colorSchema['pink.50'],
  },
  'support.warning.accent': {
    default: colorSchema['yellow.700'],
    _dark: colorSchema['yellow.700'],
  },
  'text.brand': {
    default: colorSchema['brand.500'],
    _dark: colorSchema['brand.400'],
  },
  'icon.brand': {
    default: colorSchema['brand.500'],
    _dark: colorSchema['brand.400'],
  },
  'background.test': {
    default: '#ffffff',
    _dark: colorSchema['violet.200'],
  },
  'background.test2': {
    default: '#ffffff',
    _dark: '#b8acf6',
  },
  'background.test3': {
    default: colorSchema['grey.900'],
    _dark: '#b8acf6',
  },
}
