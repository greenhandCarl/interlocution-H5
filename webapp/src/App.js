import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routers'
import uuid from 'uuid'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route exact={route.exact} key={uuid.v4()} path={route.path} render={() => {
                return (
                  <route.component />
                )
              }} />
            )
          })}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
