import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Landing from './components/landing'
import About from './components/about'
import Small from './components/small'
import HomeUser from './components/home_user'
import Testimonials from './components/testimonials'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/smallbusiness" component={Small} />
    <Route path="/homeuser" component={HomeUser} />
    <Route path="/testimonials" component={Testimonials} />
  </Route>
)

export default Routes
