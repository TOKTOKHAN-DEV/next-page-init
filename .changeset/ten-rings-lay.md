---
'@toktokhan-dev/next-page-init': patch
---

axios refresh & Token Naming

# Axios Instance, Refresh

기존 retryRequestManager 의 함수명에서 오타 수정 및 파일 이름이 변경되었습니다.

# Token Naming

기존 localStorage 의 token 키에 저장되던 객체의 property naming 이 수정되었습니다.

#### 기존

```ts
{
  access: string
  refresh: string
}
```

#### 변경

```ts
{
  access_token: string
  refresh_token: string
}
```
