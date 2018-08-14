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
      fakerInputV: '',
      inputShow: false,
      placeholder: '',
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
  componentDidMount () {
    window.scrollTo(0, 0)
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
  // 点赞功能
  onAgree = (index) => {
    const answerList = deepClone(this.state.answerList)
    answerList[index].operateLeft = 400
    if (answerList[index].agreed) {
      answerList[index].agreed = false
      answerList[index].agreeList = answerList[index].agreeList.filter(item => item !== '凯凯')
    } else {
      answerList[index].agreed = true
      answerList[index].agreeList.push('凯凯')
    }
    this.setState({answerList})
  }
  // 评论功能
  onComment = (index) => {
    const answerList = deepClone(this.state.answerList)
    answerList[index].operateLeft = 400
    answerList[index].editing = true
    this.setState({
      inputShow: true,
      answerList,
      placeholder: `评论${answerList[index].username}`
    })
  }
  handleBlur = () => {
    this.setState({inputShow: false})
  }
  // 提交功能
  handleSubmit = (e) => {
    const answerList = deepClone(this.state.answerList)
    // 回复和评论的对象不同 begin
    let username2
    if (this.state.placeholder.indexOf('评论') !== -1) {
      username2 = answerList.find(item => item.editing).username
    }
    if (this.state.placeholder.indexOf('回复') !== -1) {
      username2 = this.state.placeholder.replace('回复', '')
    }
    // end
    const v = this.state.fakerInputV
    const commentItem = { username1: '凯凯', username2, content: v }
    answerList.find(item => item.editing).commentList.push(commentItem)
    answerList.find(item => item.editing).editing = false
    this.setState({
      inputShow: false,
      answerList,
      fakerInputV: ''
    })
  }
  handleChange = (e) => {
    this.setState({fakerInputV: e.target.value})
  }
  // 回复功能
  onComItemClick = (v, index) => {
    if (v.username1 === '凯凯') { return }
    const answerList = deepClone(this.state.answerList)
    answerList[index].editing = true
    this.setState({
      inputShow: true,
      placeholder: `回复${v.username1}`,
      answerList
    })
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
                    <li className='agree' onClick={() => { this.onAgree(index) }}>
                      <div className='center-box' style={{width: answer.agreed ? '2em' : '1em'}}>
                        <img alt='' src={require('../../asset/heart2.png')} />
                        {answer.agreed ? '取消' : '赞'}
                      </div>
                    </li>
                    <li className='comment' onClick={() => { this.onComment(index) }}>
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
                <div className='agree-list' style={{borderBottom: answer.agreeList.length !== 0 ? '1px solid #e1e2e3' : 'none'}}>
                  {answer.agreeList.length !== 0 && (
                    <img alt='' src={require('../../asset/heart1.png')} />
                  )}
                  {answer.agreeList.map((item, index) => (
                    <span className='agree-item' key={index}>{item}{index === answer.agreeList.length - 1 ? '' : <i>，</i>}</span>
                  ))}
                </div>
                <div className='comment-list'>
                  {answer.commentList.map((v, i) => (
                    <div className='comment-item' onClick={() => { this.onComItemClick(v, index) }} key={i}>
                      <span className='username'>{v.username1}</span>
                      <span className={`${v.username2 ? 'nomal' : 'empty'}`}>
                        {v.username2 && '回复'}
                      </span>
                      <span className='username'>{v.username2}</span>：
                      <span className='content'>{v.content}</span>
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
          <div className='to-reply' onClick={() => { this.props.history.push('/answer') }}>
            <div className='icon'>
              <img alt='' src={require('../../asset/edit.png')} />
              <p>回答</p>
            </div>
          </div>
        </footer>
        {this.state.inputShow && (
          <div className={styles.keyboardInput}>
            <form action='#' onSubmit={this.handleSubmit}>
              <input className='faker-input' value={this.state.fakerInputV} onChange={this.handleChange} onBlur={this.handleBlur} autoFocus={Boolean(true)} placeholder={this.state.placeholder} />
            </form>
            <img alt='' className='smile' src={require('../../asset/smile.png')} />
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(Questioninfo)
