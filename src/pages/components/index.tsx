import { NextSeo } from 'next-seo'

import HomeLayout from '@/components/@Layout/HomeLayout'
import Components from '@/containers/Components'
import withUnAuthGuard from '@/hocs/withUnAuthGuard'

function ComponentsPage() {
  return (
    <>
      {/* output: 똑똑한개발자 | components */}
      {/* titleTemplate는 /configs/seo/config.ts에서 변경 가능합니다. */}
      <NextSeo title="components" />
      <HomeLayout content={<Components />} />
    </>
  )
}

export default ComponentsPage
