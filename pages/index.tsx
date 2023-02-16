import { Inter } from '@next/font/google';
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import Home from "./[home]";
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
const inter = Inter({ subsets: ['latin'] });

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
    <Layout>
      <div className="bg-red-200">HOME</div>
    </Layout>
    <Home />
    </div>
  )
}

export default Page