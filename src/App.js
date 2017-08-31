import React from 'react'
import Header from './components/header'
import Landing from './components/landing'
import About from './components/about'
import Small from './components/small'
import HomeUser from './components/home_user'
import Testimonials from './components/testimonials'

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <hr className="col-sm-8 col-sm-offset-2"/>
      <HomeUser />
      <hr className="col-sm-8 col-sm-offset-2"/>
      <Small />
      <hr className="col-sm-8 col-sm-offset-2"/>
      <About />
      <hr className="col-sm-8 col-sm-offset-2"/>
      <Testimonials />
    </div>
  );
}

export default App;
