import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

import { Bookmarks } from './contents/Bookmarks'
import { Examples } from './contents/Examples'

export const TokGuide = () => {
  return (
    <Box>
      <Text textStyle="pre-heading-01">Tok Guide</Text>

      <Text mt="24px">
        환영합니다. 해당 보일러템플릿은 똑똑한 개발자에서 제공하는 여러 모듈로
        이루어져 있습니다.
      </Text>
      <Tabs mt="24px">
        <TabList>
          <Tab>Bookmarks</Tab>
          <Tab>Examples</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Bookmarks />
          </TabPanel>
          <TabPanel>
            <Examples />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
