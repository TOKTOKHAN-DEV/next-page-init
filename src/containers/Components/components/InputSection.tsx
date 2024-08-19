import { Heading, Input, VStack } from '@chakra-ui/react'

import FormHelper from '@/components/FormHelper'

export const InputSection = () => {
  return (
    <VStack w="300px" spacing="20px" my="24px">
      <Heading size="md">Input</Heading>
      <FormHelper label="주제" message={{ help: '설명' }}>
        <Input placeholder="텍스트를 입력해주세요" />
      </FormHelper>
      <FormHelper label="주제" message={{ error: '설명' }} isInvalid>
        <Input />
      </FormHelper>
      <FormHelper label="주제" message={{ success: '설명' }}>
        <Input value="값" />
      </FormHelper>
      <FormHelper label="주제" message={{ help: '설명' }}>
        <Input value="값" />
      </FormHelper>
      <FormHelper label="주제" message={{ help: '설명' }}>
        <Input placeholder="텍스트를 입력해주세요" isDisabled />
      </FormHelper>
    </VStack>
  )
}
