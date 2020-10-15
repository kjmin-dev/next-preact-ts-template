import Card from 'antd/lib/card'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import Main from '@/layouts/Main'
import Icons from '@/components/IconMap'

export default function Contact() {
  return (
    <Main key="Contact" title="Contact">
      <h1>Contact</h1>
      <Row>
        <Col xs={24} sm={8}>
          <Card
            type="inner"
            title="Email"
            extra={<Icons icon="MailOutlined" />}
          >
            <Icons icon="MailOutlined" />{' '}
            <a href="mailto:kjmin.kr@gmail.com">kjmin.kr@gmail.com</a>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card
            type="inner"
            title="Github"
            extra={<Icons icon="GithubOutlined" />}
          >
            <Icons icon="GithubOutlined" />{' '}
            <a href="https://github.com/schnellehand">schnellehand</a>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card
            type="inner"
            title="Linkedin"
            extra={<Icons icon="LinkedinOutlined" />}
          >
            <Icons icon="LinkedinOutlined" />{' '}
            <a href="https://www.linkedin.com/in/schnellehand/">schnellehand</a>
          </Card>
        </Col>
      </Row>
    </Main>
  )
}
