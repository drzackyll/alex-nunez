import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './components/home'
import About from './components/about'
import FAQ from './components/faq'
import HireMe from './components/hireme'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQ} />
    <Route path="/hireme" component={HireMe} />
  </Route>
)

export default Routes
