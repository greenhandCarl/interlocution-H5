import QuestionlistPage from './container/QuestionlistPage'
import QuestioninfoPage from './container/QuestioninfoPage'

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
  }
]

export default routers
