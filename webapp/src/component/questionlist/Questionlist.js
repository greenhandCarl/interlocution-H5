import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import { NavBar, Icon, WingBlank, SearchBar, Drawer } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import styles from './questionlist.css'

class Questionlist extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebar: [
        {value: '产品类', key: 'prod'},
        {value: '资讯类', key: 'news'},
        {value: '股票类', key: 'stock'},
        {value: '基金类', key: 'futures'},
        {value: '期货类', key: 'found'},
        {value: '全部', key: 'all'}
      ],
      docked: false,
      open: false,
      listCategory: [
        { name: '产品类', func: 'onProdTap', current: false },
        { name: '资讯类', func: 'onNewsTap', current: false },
        { name: '股票类', func: 'onStockTap', current: false },
        { name: '基金类', func: 'onFundTap', current: false },
        { name: '期货类', func: 'onFuturesTap', current: false }
      ],
      originData: [
        {
          key: '01',
          category: ['prod', 'news', 'all'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '狮子座',
          createTime: '2017-12-04',
          extra: 'vip用户',
          awswerNum: 99,
          id: uuid.v4()
        },
        {
          key: '02',
          category: ['prod', 'stock', 'all'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的的形状，有自己的运行轨道。',
          userName: '射手座',
          createTime: '2017-12-05',
          extra: 'vip用户',
          awswerNum: 10,
          id: uuid.v4()
        },
        {
          key: '03',
          category: ['futures', 'all'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '天秤座',
          createTime: '2018-08-06',
          extra: 'vip用户',
          awswerNum: 12,
          id: uuid.v4()
        },
        {
          key: '04',
          category: ['found', 'news', 'all'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '天蝎座',
          createTime: '2019-01-04',
          extra: 'vip用户',
          awswerNum: 23,
          id: uuid.v4()
        },
        {
          key: '05',
          category: ['prod', 'found', 'all'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '水瓶座',
          createTime: '2017-09-04',
          extra: '非vip用户',
          awswerNum: 56,
          id: uuid.v4()
        },
        {
          key: '06',
          category: ['prod', 'news', 'found', 'stock', 'futures'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '处女座',
          createTime: '2017-07-04',
          extra: 'vip用户',
          awswerNum: 35,
          id: uuid.v4()
        }
      ],
      questionList: []
    }
  }
  static propTypes = {
    history: PropTypes.object
  }
  componentWillMount () {
    const { originData } = this.state
    this.setState({
      questionList: originData
    })
  }
  onDock = (d) => {
    this.setState({ [d]: !this.state[d] })
  }
  onOpenChange = (key) => {
    if (typeof key === 'string') {
      const { originData } = this.state
      this.setState({
        questionList: originData.filter(item => item.category.join('').indexOf(key) !== -1)
      })
    }
    this.setState({ open: !this.state.open })
  }
  goInfo = (id) => {
    this.props.history.push(`/questioninfo/${id}`)
  }
  render () {
    let { questionList, sidebar } = this.state
    sidebar = sidebar.map((bar, index) => (
      <div className='bar-item' key={index} onClick={() => { this.onOpenChange(bar.key) }}>{bar.value}</div>
    ))
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => { console.log(1) }}
          rightContent={[
            <Icon key='0' type='ellipsis' color='#000' />
          ]}
        >
          提问列表
        </NavBar>
        <div className={styles.searchBar}>
          <WingBlank>
            <img alt='' onClick={this.onOpenChange} className={styles.searchSide} src={require('../../asset/icon-nav-form.png')} />
            <SearchBar className={styles.searchForm} placeholder='搜索' maxLength={8} />
          </WingBlank>
        </div>
        <div className={styles.pageBody}>
          <Drawer
            className={styles.myDrawer}
            style={{ minHeight: document.documentElement.clientHeight }}
            sidebarStyle={{ border: '1px solid #ddd', width: '25vw', textAlign: 'center' }}
            sidebar={sidebar}
            open={this.state.open}
            onOpenChange={this.onOpenChange}
            children=''
          />
          {questionList.map((ListItem, index) => (
            <div className={styles.listItem} key={uuid.v4()}>
              <div className={styles.tipContainer}>
                <span className={styles.sortTip}>{index + 1 > 9 ? index + 1 : `0${index + 1}` }</span>
                <span className={styles.tipUserInfo}>{ListItem.userName}</span>
              </div>
              <div className={styles.content}>{ListItem.content}</div>
              <div className={styles.titleTime}>
                <span className='createTime'>{ListItem.createTime}</span>
                <span className='extra'>{ListItem.extra}</span>
                <span className='goInfo' onClick={() => { this.goInfo(ListItem.id) }}>查看{ListItem.awswerNum}个回答</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Questionlist)
