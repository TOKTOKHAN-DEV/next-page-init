---
'@toktokhan-dev/next-page-init': patch
---

isLogin 이 null 일때를 고려하여 ClientOnly 컴포넌트를 생성해 관리하는 로직이 추가되었습니다.
아래 같은 경우는 isLogin 이 null 일때, falsy 한 값으로 간주하여, 로그인 버튼을 랜더링 하게 됩니다.

```tsx
{
  isLogin ?
    <Button variant={'line'} size={'sm'} onClick={() => {}}>
      Logout
    </Button>
  : <Link variant={'line'} size={'sm'} href={ROUTES.LOGIN_MAIN}>
      Login
    </Link>
}
```

현재 토큰은 localStorage 에 저장되어 있지만, 서버에서 localStorage 는 접근 할수 없기 때문에, 하이드레이션이 일어나기전 서버에서 최로로 받은 코드는 토큰이 존재하지 않은 상태가 되게 됩니다.
따라서, isLogin 값은 서버에선 의도적으로 null 을 할당 받게 되어있습니다.

```tsx
const isLogin: boolean | null = isClient ? !!token?.access_token : null
```

로그인 뿐 아니라 로컬 스토리지 관련 값을 사용할때는 `Null` 상태를 고려하여 최초 하이드레이션이 일어나기 전 시점에는 아예 랜더링을 안하는 쪽이 좋습니다.

```tsx
() => ({
if(isLogin === null) return null
return isLogin ? <Button>Logout</Button> : <Button><Login/Button>
})()
```

똑똑한 개발자의 보일러플레이트에는 선언적으로 처리하기 위해 useClient 훅을 사용하여 `ClientOnly` 컴포넌트를 만들어 핸들링하는 로직이 추가되었습니다.

```tsx
interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const ClientOnly = ({ children, fallback }: ClientOnlyProps) => {
  const isClient = useClient()
  if (!isClient) return isNullish(fallback) ? null : fallback

  return children
}
```

사용

```tsx
<ClientOnly>
{ isLogin ? <Button>Logout</Button> : <Button>Login</Button }
</ClientOnly>
```
