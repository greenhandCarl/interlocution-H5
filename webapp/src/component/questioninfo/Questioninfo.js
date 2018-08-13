import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'
import uuid from 'uuid'
import styles from './questioninfo.css'

class Questioninfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questionInfo: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道?',
      answerList: [
        {
          username: '用户12138',
          answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
          createTime: '2018-07-19',
          extra: '其他信息',
          operateLeft: 400,
          editing: false,
          agreed: false,
          commentList: [],
          agreeList: ['用户huangkai', '用户wangzhouyong']
        },
        {
          username: '用户12139',
          answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
          createTime: '2018-07-19',
          extra: '其他信息',
          operateLeft: 400,
          editing: false,
          agreed: false,
          commentList: [
            { username1: '用户huangkai', username2: '', content: '我觉着你说的不对' },
            { username1: '用户12138', username2: '用户huangkai', content: '先问是不是，在问为什么' },
            { username1: 'yonghuzj', username2: '', content: '楼上二位不要在争论了' }
          ],
          agreeList: ['用户huangkai', '用户wangzhouyong']
        },
        {
          username: '用户12140',
          answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
          createTime: '2018-07-19',
          extra: '其他信息',
          operateLeft: 400,
          editing: false,
          agreed: false,
          commentList: [],
          agreeList: []
        },
        {
          username: '用户12141',
          answer: '这个问题其实非常简单解决，选择一款搜索引擎，把问题输入进去，按回车，就会看到很多答案了。',
          createTime: '2018-07-19',
          extra: '其他信息',
          operateLeft: 400,
          editing: false,
          agreed: false,
          commentList: [],
          agreeList: []
        }
      ]
    }
  }
  static propTypes = {
    history: PropTypes.object
  }
  render () {
    const { answerList } = this.state
    const answerCount = answerList.length || 0
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => { this.props.history.goBack() }}
          rightContent={[
            <Icon key='0' type='ellipsis' color='#000' />
          ]}
        >
          问题详情
        </NavBar>
        <div className={styles.questionInfo}>
          <div className='info-text'>{this.state.questionInfo}</div>
          <div className='answer-count'>{answerCount}个回答</div>
        </div>
        <p className={styles.answerTitle}>回答列表</p>
        <div className={styles.answerList}>
          {answerList.map((answer, index) => (
            <div className='answer-item' key={uuid.v4()}>
              <div className='tip-container'>
                <span className='tip-text'>
                  {answer.username}
                </span>
              </div>
              <div className='answer-info'>{answer.answer}</div>
              <div className='extra-info'>
                <span className='create-time'>{answer.createTime}</span>
                <span className='other-info'>{answer.extra}</span>
                <div className='operate-shade' />
                <div className='operate-container'>
                  <ul className='operate' style={{left: 0}}>
                    <li className='agree'>
                      <img alt='' src={require('../../asset/heart2.png')} />
                      赞
                    </li>
                    <li className='comment'>
                      <img alt='' src={require('../../asset/message.png')} />
                      评论
                    </li>
                  </ul>
                </div>
                <img alt='' />
              </div>
              <div className='agree-list'>
                {answer.agreeList.map((item, index) => (
                  <span className='agree-item' key={index}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Questioninfo)
