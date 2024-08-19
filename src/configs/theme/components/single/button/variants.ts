import { ChakraProps, defineStyle } from '@chakra-ui/react'

type DefineVariantProps = {
  bgColor: ChakraProps['color']
  hoverColor: ChakraProps['color']
  color: ChakraProps['color']
  disabledOpacity: string
  borderColor?: ChakraProps['color']
}

const defineVariant = ({
  bgColor,
  hoverColor,
  color,
  disabledOpacity,
  borderColor,
}: DefineVariantProps) => {
  return defineStyle(() => {
    return {
      bg: bgColor,
      color: color,
      border: '1px solid',
      outline: 'none',
      borderColor: borderColor || 'transparent',
      transition: 'all 0.2s ease-in-out',
      _hover: {
        bg: hoverColor,
        _disabled: {
          willChange: 'opacity',
          bg: bgColor,
          borderColor: borderColor || 'transparent',
          opacity: disabledOpacity,
        },
      },
      _active: { bg: hoverColor },
      _disabled: {
        willChange: 'opacity',
        bg: bgColor,
        borderColor: borderColor || 'transparent',
        opacity: disabledOpacity,
      },
      _focus: { boxShadow: 'none', outline: 'none' },
      _focusVisible: {
        ringColor: 'transparent',
      },
    }
  })
}

const primary = defineVariant({
  bgColor: 'primary.3',
  hoverColor: 'primary.4',
  color: 'white',
  disabledOpacity: '0.3',
  borderColor: 'transparent',
})

const point = defineStyle({
  border: '1px solid',
  borderColor: 'gray.500',
  background: 'white',
  color: 'primary.500',
})

const line = defineStyle({
  background: 'white',
  color: 'content.1',
})

const unstyled = defineStyle({
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: '0',
  p: '0',
})

const getPrimaryByColor = (colorScheme: string) => {
  const arr = colorScheme.split('.')
  const colorKey = arr.slice(0, -1).join('.')
  const colorLv = Number(arr.at(-1))

  // 정해진 토큰 형식이 아니라면 scheme 그대로 반환, 조건 추가될 수 있음.
  const isNotFormatted = isNaN(colorLv)
  if (isNotFormatted) {
    return {
      main: colorScheme,
      hover: colorScheme,
      active: colorScheme,
    }
  }

  return {
    main: colorScheme,
    hover: `${colorKey}.${colorLv + 1}`,
    active: `${colorKey}.${colorLv + 2}`,
  }
}

interface ButtonAnatomyProps {
  color: ChakraProps['color']
  bgColor: ChakraProps['color']
  borderColor?: ChakraProps['color']
}

type DefineVariantV2Props = {
  basic: ButtonAnatomyProps
  hover: Partial<ButtonAnatomyProps>
  active: Partial<ButtonAnatomyProps>
  disabled: Partial<ButtonAnatomyProps>
}

const defineVariantV2 = ({
  basic,
  active,
  disabled,
  hover,
}: DefineVariantV2Props) => {
  return {
    ...basic,
    borderWidth: basic?.borderColor ? '1px' : '0px',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',

    _hover: {
      ...hover,
      _disabled: { opacity: 1, ...disabled },
    },
    _active: active,
    _disabled: { opacity: 1, ...disabled },

    _focus: { boxShadow: 'none', outline: 'none' },
    _focusVisible: {
      ringColor: 'transparent',
    },
  }
}

const solidPrimary = defineVariantV2({
  basic: {
    bgColor: 'primary.3',
    color: 'content.8',
  },
  hover: { bgColor: 'primary.4' },
  active: { bgColor: 'primary.5' },
  disabled: { color: 'content.5', bgColor: 'background.basic.4' },
})

const outlinePrimary = defineVariantV2({
  basic: {
    color: 'primary.3',
    bgColor: 'background.basic.1',
    borderColor: 'primary.3',
  },
  hover: { bgColor: 'primary.1' },
  active: { bgColor: 'primary.2' },
  disabled: { color: 'content.6', borderColor: 'border.basic.2' },
})

const outlineSecondary = defineVariantV2({
  basic: {
    color: 'primary.3',
    bgColor: 'background.basic.1',
    borderColor: 'border.basic.2',
  },
  hover: { bgColor: 'background.basic.3' },
  active: { bgColor: 'background.basic.4' },
  disabled: { color: 'content.6', borderColor: 'border.basic.2' },
})

const outlineAssistive = defineVariantV2({
  basic: {
    color: 'content.2',
    bgColor: 'background.basic.1',
    borderColor: 'border.basic.2',
  },
  hover: { bgColor: 'background.basic.3' },
  active: { bgColor: 'background.basic.4' },
  disabled: { color: 'content.6', borderColor: 'border.basic.2' },
})

export const variants = {
  solidPrimary,
  outlinePrimary,
  outlineSecondary,
  outlineAssistive,
  primary,
  point,
  line,
  unstyled,
}
