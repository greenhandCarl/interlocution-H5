import React, { Component } from 'react'
import uuid from 'uuid'
import { NavBar, Icon, WingBlank, SearchBar } from 'antd-mobile'
import styles from './questionlist.css'

class Questionlist extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listCategory: [
        { name: '产品类', func: 'onProdTap', current: false },
        { name: '资讯类', func: 'onNewsTap', current: false },
        { name: '股票类', func: 'onStockTap', current: false },
        { name: '基金类', func: 'onFundTap', current: false },
        { name: '期货类', func: 'onFuturesTap', current: false }
      ],
      questionList: [
        {
          key: '01',
          category: ['prod', 'news'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '狮子座',
          createTime: '2017-12-04',
          extra: 'vip用户',
          awswerNum: 99
        },
        {
          key: '02',
          category: ['prod', 'stock'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的的形状，有自己的运行轨道。',
          userName: '射手座',
          createTime: '2017-12-05',
          extra: 'vip用户',
          awswerNum: 10
        },
        {
          key: '03',
          category: ['futures'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '天秤座',
          createTime: '2018-08-06',
          extra: 'vip用户',
          awswerNum: 12
        },
        {
          key: '04',
          category: ['found', 'news'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '天蝎座',
          createTime: '2019-01-04',
          extra: 'vip用户',
          awswerNum: 23
        },
        {
          key: '05',
          category: ['prod', 'found'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '水瓶座',
          createTime: '2017-09-04',
          extra: '非vip用户',
          awswerNum: 56
        },
        {
          key: '06',
          category: ['prod', 'news', 'found', 'stock', 'futures'],
          title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          userName: '处女座',
          createTime: '2017-07-04',
          extra: 'vip用户',
          awswerNum: 35
        }
      ]
    }
  }
  render () {
    const { questionList } = this.state
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
        <div className={styles.searchBar}>
          <WingBlank>
            <img alt='' onClick={() => { console.log(1) }} className={styles.searchSide} src={require('../../asset/icon-nav-form.png')} />
            <SearchBar className={styles.searchForm} placeholder='搜索' maxLength={8} />
          </WingBlank>
        </div>
        <div className={styles.pageBody}>
          {questionList.map((ListItem, index) => (
            <div className={styles.listItem} key={uuid.v4()}>
              <div className={styles.tipContainer}>
                <span className={styles.sortTip}>{ListItem.key}</span>
                <span className={styles.tipUserInfo}>{ListItem.userName}</span>
              </div>
              <div className={styles.content}>{ListItem.content}</div>
              <div className={styles.titleTime}>
                <span className='createTime'>{ListItem.createTime}</span>
                <span className='extra'>{ListItem.extra}</span>
                <span className='goInfo'>查看{ListItem.awswerNum}个回答</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Questionlist
