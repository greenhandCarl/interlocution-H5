import QuestionlistPage from './container/QuestionlistPage'
import QuestioninfoPage from './container/QuestioninfoPage'
import AnswerPage from './container/AnswerPage'

const routers = [
  {
    path: '/',
    exact: true,
    component: QuestionlistPage
  },
  {
    path: '/questioninfo/:id',
    exact: true,
    component: QuestioninfoPage
  },
  {
    path: '/answer',
    exact: true,
    component: AnswerPage
  }
]

export default routers
