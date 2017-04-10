import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './components/home'
import About from './components/about'
import FAQ from './components/faq'
import Contact from './components/contact'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQ} />
    <Route path="/contact" component={Contact} />
  </Route>
)

export default Routes
