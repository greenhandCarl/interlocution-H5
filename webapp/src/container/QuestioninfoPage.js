import React, { Component } from 'react'
import Questioninfo from '../component/questioninfo/Questioninfo'

class QuestioninfoPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <Questioninfo />
      </div>
    )
  }
}

export default QuestioninfoPage
