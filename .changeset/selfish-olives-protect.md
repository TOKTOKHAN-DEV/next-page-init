---
'@toktokhan-dev/next-page-init': patch
---

## Context API -> zustand

- 전역/지역/스토리지 상태 관리 라이브러리가 변경되었습니다.

Nextjs 와 같은 SSR 환경에선, 서버에서의 상태변경이 일어날 경우 각기 다른 클라이언트에서 서버상태를 공유하게 되는 이슈가 생길 수 있기 때문에, zustand 를 context 와 함께 사용하는 것을 권장합니다.
[zustand-with-Next.js] https://zustand.docs.pmnd.rs/guides/nextjs

자세한 예시와 사용법은 템플릿의 TokGuide drawer 의 `state` tab
또는 [TOKDOCS 문서](https://toktokhan-dev-docs.vercel.app/docs/zustand/overview) 를 참고해주세요.

TokGuide example path: src/components/@Drawer/TokGuideDrawer/components/contents/State/State.tsx
