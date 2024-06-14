import { checkboxAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const Checkbox = defineMultiStyleConfig({
  defaultProps: {},
})
export default Checkbox
