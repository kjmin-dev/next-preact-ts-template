import React from 'react'
import List from 'antd/lib/list'
import Typography from 'antd/lib/typography'

import Main from '@/layouts/Main'
import { TITLE_MAIN } from '@/lib/constants'

export default function Home() {
  const items = [
    { link: 'https://www.typescriptlang.org', text: 'TypeScript' },
    { link: 'https://nextjs.org', text: 'Next.js' },
    { link: 'https://preactjs.com', text: 'Preact.js' },
    { link: 'https://ant.design', text: 'Ant Design' },
  ]
  return (
    <Main key="Home" title={TITLE_MAIN}>
      <h1>Hello, World!</h1>
      <List
        header={<div>This template contains:</div>}
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>
              <a href={item.link}>{item.text}</a>
            </Typography.Text>
          </List.Item>
        )}
      />
    </Main>
  )
}

/*
@inject('countStore')
@observer
export default class Home extends React.Component {
  render() {
    const { countStore } = this.props
    const items = [
      { link: "https://www.typescriptlang.org", text: "TypeScript" },
      { link: "https://nextjs.org", text: "Next.js" },
      { link: "https://preactjs.com", text: "Preact.js" },
      { link: "https://mobx.js.org/README.html", text: "Mobx.js" },
      { link: "https://ant.design", text: "Ant Design" },
    ]
    return (
      <Main key="Home" title={ TITLE_MAIN }>
        <h1>Hello, World!</h1>
        <List
          header={<div>This template includes:</div>}
          bordered
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <Typography.Text>
                <a href={ item.link }>{ item.text }</a>
              </Typography.Text>
            </List.Item>
          )} />

          <h1>Mobx Counter</h1>
          <span>Count { countStore.count } </span>
          <Button onClick={ countStore.increment }>+1</Button>
          <Button onClick={ countStore.decrement }>-1</Button>
      </Main>
    )
  }
}
*/
