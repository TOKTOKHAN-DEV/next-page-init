import React from 'react'

import { Stack, Switch } from '@chakra-ui/react'

const SwitchExample = ({ isAllDisable = false }: { isAllDisable: boolean }) => {
  return (
    <Stack align="center" direction="row">
      <Switch isDisabled={isAllDisable} size="sm" />
      <Switch isDisabled={isAllDisable} size="md" />
    </Stack>
  )
}

export default SwitchExample
