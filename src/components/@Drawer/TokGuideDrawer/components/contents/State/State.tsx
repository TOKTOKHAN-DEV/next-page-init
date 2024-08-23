import React from 'react'

import { Button, HStack, Text, VStack } from '@chakra-ui/react'

import { useGlobalStore } from '@/stores/global/state'

import Sections from './components/@Layout/Sections'
import Global from './components/Global'
import Storage from './components/Storage'
import Local from './components/local/Local\b'
import { CountProvider } from './components/local/storage/state'

const State = () => {
  return (
    <VStack w={'100%'} spacing={'20px'}>
      <Sections title={'Global State'}>
        <Global />
      </Sections>
      <Sections title={'Local State'}>
        <CountProvider>
          <Local />
        </CountProvider>
      </Sections>
      <Sections title={'Storage State'}>
        <Storage />
      </Sections>
    </VStack>
  )
}

export default State
