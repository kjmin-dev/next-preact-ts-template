import React from 'react'
import Layout from 'antd/lib/layout'

const { Footer } = Layout

export default function FooterComponent() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Template ©2020 Created by{' '}
      <a href="https://github.com/schnellehand/next-preact-ts-template">
        schnellehand
      </a>
    </Footer>
  )
}
