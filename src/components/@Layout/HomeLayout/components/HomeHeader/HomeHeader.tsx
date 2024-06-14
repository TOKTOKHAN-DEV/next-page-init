import { Link } from '@chakra-ui/next-js'
import {
  Button,
  Container,
  ContainerProps,
  HStack,
  IconButton,
  Image,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import { LogoIcon, MenuIcon } from 'generated/icons/MyIcons'

import { ROUTES } from '@/generated/path/routes'
import { useAuth } from '@/hooks/useAuth'
import { MY_IMAGES } from '@/images'

import HomeHeaderDrawer from './components/HomeHeaderDrawer'

const HomeHeader = ({ ...props }: ContainerProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { isLogin } = useAuth()
  return (
    <Container
      variant={'basis'}
      display={'flex'}
      w={'100%'}
      alignItems={'center'}
      justifyContent="space-between"
      {...props}
    >
      <Link variant={'unstyled'} href={ROUTES.MAIN}>
        <LogoIcon boxSize={'74px'} color={'icon.brand'} />
      </Link>
      <HStack spacing="16px">
        {isLogin ?
          <Button variant={'line'} size={'sm'} onClick={() => {}}>
            Logout
          </Button>
        : <Link variant={'line'} size={'sm'} href={ROUTES.LOGIN_MAIN}>
            Login
          </Link>
        }
        <IconButton //
          size={'xs'}
          icon={<MenuIcon w="24px" h="24px" color={'icon.primary'} />}
          onClick={onOpen}
          cursor="pointer"
          bg="transparent"
          aria-label="btn-toggle-drawer"
        />
      </HStack>

      <HomeHeaderDrawer isOpen={isOpen} onClose={onClose} />
    </Container>
  )
}

export default HomeHeader
