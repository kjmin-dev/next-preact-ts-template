import React from 'react'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Icons from '@/components/IconMap'
import routes from '@/lib/routes'

const { Header } = Layout

export default function HeaderComponent() {
  const router = useRouter()
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
          {routes.map((elem) => {
            return (
              <Menu.Item key={elem.path}>
                <Icons icon={elem.icon} />
                <Link href={elem.path}>{elem.text}</Link>
              </Menu.Item>
            )
          })}
          <Menu.Item key="PATH" disabled>
            {router.pathname}
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}
