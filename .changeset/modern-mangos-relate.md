---
'@toktokhan-dev/next-page-init': patch
---

- 새로운 디자인 시스템이 적용되었습니다.
  - 기본 theming예시는 TOKGUIDE (우측 Drawer 버튼)을 확인해 주세요.
    (TOKGUIDE THEME path src/components/@Drawer/TokGuideDrawer/components/contents/Theme/Theme.tsx)
- update @chakra-ui/theme-tools

```diff
- "@chakra-ui/theme-tools": "^2.0.18",

+  "@chakra-ui/theme-tools": "^2.1.2",

```

- next font local font 설정 변경
  - pretendard variable font를 사용함으로서 src에 배열로 넣었던 font설정 값을 경로로 변환했습니다.

```diff
import localFont from 'next/font/local'

export const Pretendard = localFont({
  src:
-   [
-     {
-       path: '../../../public/fonts/pretendard/PretendardVariable.woff2',
-       weight: '100',
-       style: 'normal',
-     },
-     {
-       path: '../../../public/fonts/pretendard/PretendardVariable.woff2',
-       weight: '200',
-       style: 'normal',
- ...
-   ],

+   '../../../public/fonts/pretendard/PretendardVariable.woff2',
})

```

이 밖의 변경사항은 변경사항 코드를 확인해주세요.
