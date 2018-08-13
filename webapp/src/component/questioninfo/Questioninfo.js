import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'
// import uuid from 'uuid'
import styles from './questioninfo.css'
import { deepClone } from '../../util/globalutils'

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
          agreeList: ['用户huangkai', '用户wangzhouyong', '用户huangkai', '用户wangzhouyong']
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
            { username1: '用户12138', username2: '用户huangkai', content: '先问是不是，再问为什么' },
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
  onComImgClick = (index) => {
    const answerList = deepClone(this.state.answerList)
    answerList[index].operateLeft = 0
    this.setState({answerList})
  }
  onShadeClick = (index) => {
    const answerList = deepClone(this.state.answerList)
    answerList[index].operateLeft = 400
    this.setState({answerList})
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
            <div className='answer-item' key={index}>
              <div className='tip-container'>
                <span className='tip-text'>
                  {answer.username}
                </span>
              </div>
              <div className='answer-info'>{answer.answer}</div>
              <div className='extra-info'>
                <span className='create-time'>{answer.createTime}</span>
                <span className='other-info'>{answer.extra}</span>
                <div className='operate-shade' onClick={() => { this.onShadeClick(index) }} style={{display: answer.operateLeft === 0 ? 'block' : 'none'}} />
                <div className='operate-container'>
                  <ul className='operate' style={{left: answer.operateLeft}}>
                    <li className='agree'>
                      <div className='center-box'>
                        <img alt='' src={require('../../asset/heart2.png')} />
                        赞
                      </div>
                    </li>
                    <li className='comment'>
                      <div className='center-box'>
                        <img alt='' src={require('../../asset/message.png')} />
                        评论
                      </div>
                    </li>
                  </ul>
                </div>
                <img alt='' onClick={() => { this.onComImgClick(index) }} className='comment-img' src={require('../../asset/comment.jpg')} />
              </div>
              <div className='comment-container' style={{marginTop: '.2rem'}}>
                <div className='agree-list'>
                  {answer.agreeList.length !== 0 && (
                    <img alt='' src={require('../../asset/heart1.png')} />
                  )}
                  {answer.agreeList.map((item, index) => (
                    <span className='agree-item' key={index}>{item}{index === answer.agreeList.length - 1 ? '' : <i>，</i>}</span>
                  ))}
                </div>
                <div className='comment-list'>
                  {answer.commentList.map((item, index) => (
                    <div className='comment-item' key={index}>
                      <span className='username'>{item.username1}</span>
                      <span className={`${item.username2 ? 'nomal' : 'empty'}`}>
                        {item.username2 && '回复'}
                      </span>
                      <span className='username'>{item.username2}</span>：
                      <span className='content'>{item.content}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer className={styles.footer}>
          <div className='to-home' onClick={() => { this.props.history.push('/') }}>
            <div className='icon'>
              <img alt='' src={require('../../asset/home.png')} />
              <p>首页</p>
            </div>
          </div>
          <div className='to-reply' onClick={() => { console.log('to reply') }}>
            <div className='icon'>
              <img alt='' src={require('../../asset/edit.png')} />
              <p>回答</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default withRouter(Questioninfo)
