---
'@toktokhan-dev/next-page-init': patch
---

# CLI 폰트 테마 수정

똑똑한 개발자가 주로 사용하는 'Pretendard Variable' 폰트를 키값으로 등록했습니다. Next.js 폰트를 적용할 때 변수를 사용해 'Pretendard Variable'이라는 fontFamily를 등록할 수 없어서 추가적으로 테마에 지정해주었습니다.

기본 fontFamily를 지정할 때 기존에는 `style.ts`의 body와 heading 컴포넌트를 따로 테마 설정하는 과정이 필요했으나, 이제 모든 기본 폰트 설정이 `src/configs/theme/foundations/typography/fonts/index.ts` 경로에 통합되었습니다. 앞으로는 기본 폰트를 지정할 때 해당 경로에서 지정해주시면 됩니다.
