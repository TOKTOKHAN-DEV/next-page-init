import React from 'react'

import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

const RadioExample = ({ isAllDisable = false }: { isAllDisable: boolean }) => {
  const [value, setValue] = React.useState('1')

  const cloneWithDisabled = (element: React.ReactElement, index: number) =>
    React.cloneElement(element, {
      isDisabled: isAllDisable,
    })

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        {['First', 'Second', 'Third', 'Fourth'].map((label, index) =>
          cloneWithDisabled(
            <Radio key={index} value={(index + 1).toString()}>
              {label}
            </Radio>,
            index,
          ),
        )}
      </Stack>
    </RadioGroup>
  )
}

export default RadioExample
