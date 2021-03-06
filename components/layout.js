import * as React from 'react'
import { DefaultSeo } from 'next-seo'

import { defaultSeo } from 'next-seo.config'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'

function Layout({ children, footer, navigation }) {
  return (
    <React.Fragment>
      <DefaultSeo {...defaultSeo} />
      <Header {...navigation} />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
      <Footer {...footer} />
    </React.Fragment>
  )
}

export default Layout
