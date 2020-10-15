import React from 'react'
import Head from 'next/head'
import Layout from 'antd/lib/layout'
import NextNprogress from 'nextjs-progressbar'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TITLE_DEFAULT } from '@/lib/constants'

const { Content } = Layout

interface MainProps {
  title?: string
}

export default class Main extends React.Component<MainProps> {
  render() {
    const title = this.props.title
      ? `${this.props.title} - ${TITLE_DEFAULT}`
      : TITLE_DEFAULT
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <NextNprogress
          color="#f50057"
          options={{ easing: 'ease', speed: 150 }}
        />
        <Header />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ padding: 24, minHeight: 380 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer />
      </>
    )
  }
}
