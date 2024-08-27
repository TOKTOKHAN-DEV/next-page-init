import { Input, VStack } from '@chakra-ui/react'

import FormHelper from '@/components/FormHelper'

export const InputExample = ({ isDisable = false }: { isDisable: boolean }) => {
  return (
    <VStack w="300px" spacing="20px" my="24px">
      <FormHelper
        label="주제"
        message={{ help: '설명' }}
        isDisabled={isDisable}
      >
        <Input placeholder="텍스트를 입력해주세요" />
      </FormHelper>
      <FormHelper
        label="주제"
        message={{ error: '설명' }}
        isInvalid
        isDisabled={isDisable}
      >
        <Input />
      </FormHelper>
      <FormHelper
        label="주제"
        message={{ success: '설명' }}
        isDisabled={isDisable}
      >
        <Input value="값" onChange={() => {}} />
      </FormHelper>
      <FormHelper
        label="주제"
        message={{ help: '설명' }}
        isDisabled={isDisable}
      >
        <Input value="값" onChange={() => {}} />
      </FormHelper>
      <FormHelper
        label="주제"
        message={{ help: '설명' }}
        isDisabled={isDisable}
      >
        <Input placeholder="텍스트를 입력해주세요" isDisabled />
      </FormHelper>
    </VStack>
  )
}
