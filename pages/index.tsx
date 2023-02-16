import { Inter } from '@next/font/google';
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
const inter = Inter({ subsets: ['latin'] });

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <div className="bg-red-200">HOME</div>
    </Layout>
  )
}

export default Page