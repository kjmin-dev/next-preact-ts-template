import React from 'react'

import 'normalize.css'
import 'antd/dist/antd.min.css'

export default class _App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps}></Component>
  }
}
