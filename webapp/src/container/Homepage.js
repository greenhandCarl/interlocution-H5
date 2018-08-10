import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key='0' type='ellipsis' color='#000' />
          ]}
        >
          提问列表
        </NavBar>
      </div>
    )
  }
}

export default HomePage
