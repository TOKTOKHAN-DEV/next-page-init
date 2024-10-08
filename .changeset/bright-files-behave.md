---
'@toktokhan-dev/next-page-init': patch
---

- use-hook-form + yup 사용 예제가 추가되었습니다.
- hook form 경로 src/hooks/useExampleForm.ts
- 상수 경로
  - 상수는 서지우님의 gen-yup plugin 개발시 디자이너와 상의 후 결정된 정규식, 문구로 지정하였습니다. (Thanks [@Panxoat](https://github.com/Panxoat)!)
  - src/constants/form/regex.ts
  - src/constants/form/helper-text.ts
- 예제 컴포넌트
  - TokGide Form Tab (src/components/@Drawer/TokGuideDrawer/components/contents/Form/Form.tsx)
