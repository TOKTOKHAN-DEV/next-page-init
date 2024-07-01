# @toktokhan-dev/next-page-init

## 0.0.5

### Patch Changes

- 73246c3: axios refresh & Token Naming

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

## 0.0.4

### Patch Changes

- 2eb1b20: update react-web

  @toktokhan-dev/react-web package 가 0.0.8 에서 0.0.11 로 수정 되었습니다.

  social 로그인 관련 api 들이 수정됨에 따라 예시가 수정되었습니다.

## 0.0.3

### Patch Changes

- 5fedf7f: - update'@toktokhan-dev/\*' packages
  - update social oauth
    - onFail parameters
  - update example react query v5대응
  - eslint downgrade v8.5.3

## 0.0.2

### Patch Changes

- 7e3e050: add gitignore
- 7ea6357: remove pnpm-lock.yaml
- b8b2bf3: add tok-cli-commit
- 2bf5a83: update packages version

## 0.0.1

### Patch Changes

- 9ff916e: 똑똑한 개발자 컨벤션이 담긴 Next.js page-router 가 적용 된 보일러 플레이트 입니다.

## 0.0.3

### Patch Changes

- a96412c: changeset action for git tag
- 05eafad: changeset action version -> publish

## 0.0.2

### Patch Changes

- 621ee4f: changeset action for git tag

## 0.0.1

### Patch Changes

- 58f516e: use pnpm in github action
- c21709a: changeset pakcage name
- f11c21e: package.json name
- 270d669: setup husky
- 3194fde: initialize
