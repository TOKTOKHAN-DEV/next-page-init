import { Link } from '@chakra-ui/next-js'
import {
  Button,
  Container,
  ContainerProps,
  HStack,
  IconButton,
  Spinner,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import { LogoIcon, MenuIcon } from 'generated/icons/MyIcons'

import ClientOnly from '@/components/ClientOnly'
import { ROUTES } from '@/generated/path/routes'
import { useAuth } from '@/hooks/useAuth'
import { tokenStorage } from '@/stores/local/token'

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
        <ClientOnly fallback={<Spinner size={'sm'} />}>
          {isLogin ?
            <Button
              variant={'line'}
              size={'sm'}
              onClick={() => tokenStorage?.remove()}
            >
              Logout
            </Button>
          : <Link variant={'line'} size={'sm'} href={ROUTES.LOGIN_MAIN}>
              Login
            </Link>
          }
        </ClientOnly>
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
