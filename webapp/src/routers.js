import HomePage from './container/Homepage'
import Questionlist from './container/Questionlist'
import Questioninfo from './container/Questioninfo'

const routers = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/questionlist',
    exact: true,
    component: Questionlist
  },
  {
    path: '/questioninfo/:id',
    exact: true,
    component: Questioninfo
  }
]

export default routers
