import React, { Component } from 'react'
import Answer from '../component/answer/Answer'

class AnswerPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    //初始化
  }
  render () {
    return (
      <div>
        <Answer />
      </div>
    )
  }
}

export default AnswerPage
