import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavBar, Icon, TextareaItem, Button } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { createForm } from 'rc-form'
import styles from './answer.css'

class Answer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textareaValue: '',
      answerInfo: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道?'
    }
  }
  static propTypes = {
    history: PropTypes.object,
    form: PropTypes.object
  }
  textareaHandleChange = (v) => {
    this.setState({textareaValue: v})
  }
  onClearAns = () => {
    this.setState({textareaValue: ''})
  }
  onPostAns = () => {
    this.setState({textareaValue: ''})
  }
  render () {
    const { getFieldProps } = this.props.form
    return (
      <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => { this.props.history.goBack() }}
          rightContent={[
            <Icon key='0' type='ellipsis' color='#000' />
          ]}
        >
          回答
        </NavBar>
        <div className={styles.answerInfo}>
          <p className='text'>{this.state.answerInfo}</p>
        </div>
        <div className={styles.pageBody}>
          {/* <p className='answer-title'>回答</p> */}
          <div style={{borderTop: '0.01rem solid #999', borderBottom: '0.01rem solid #999'}}>
            <TextareaItem
              {...getFieldProps('textarea', {})}
              placeholder='请输入回答'
              rows={5}
              count={500}
              value={this.state.textareaValue}
              onChange={this.textareaHandleChange}
            />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button onClick={this.onPostAns} className='post-answer' type='primary'>提交回答</Button>
          <Button onClick={this.onClearAns} className='clear-answer' type='ghost'>清空回答</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(createForm()(Answer))
