import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>A l e x N u ñ e z</h1>
      <h3>IT Consultant</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2"><Link to="/">Home</Link></div>
          <div className="col-xs-2"><Link to="/about">About</Link></div>
          <div className="col-xs-2"><Link to="/faq">FAQ</Link></div>
          <div className="col-xs-2"><Link to="/hireme">Hire Me</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Header
