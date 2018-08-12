import React, { Component } from 'react'
import Questionlist from '../component/questionlist/Questionlist'

class QuestionlistPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <Questionlist />
      </div>
    )
  }
}

export default QuestionlistPage
