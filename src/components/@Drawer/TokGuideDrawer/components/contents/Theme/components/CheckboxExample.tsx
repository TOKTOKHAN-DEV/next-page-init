import React from 'react'

import { Checkbox, Stack } from '@chakra-ui/react'

const CheckboxExample = ({
  isAllDisable = false,
}: {
  isAllDisable: boolean
}) => {
  const [checkedItems, setCheckedItems] = React.useState([false, false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  const cloneWithDisabled = (element: React.ReactElement, index: number) =>
    React.cloneElement(element, {
      isDisabled: isAllDisable,
      isChecked: checkedItems[index],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setCheckedItems((prev) =>
          prev.map((item, i) => (i === index ? e.target.checked : item)),
        ),
    })

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) =>
          setCheckedItems([
            e.target.checked,
            e.target.checked,
            e.target.checked,
          ])
        }
        isDisabled={isAllDisable}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        {['Child Checkbox 1', 'Child Checkbox 2', 'Child Checkbox 3'].map(
          (label, index) =>
            cloneWithDisabled(<Checkbox key={index}>{label}</Checkbox>, index),
        )}
      </Stack>
    </>
  )
}

export default CheckboxExample
