import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1 className="title">A l e x N u ñ e z</h1>
      <h3 className="title">IT Consultant</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-1"><Link to="/">Home</Link></div>
          <div className="col-xs-2"><Link to="/smallbusiness">Small Businesses</Link></div>
          <div className="col-xs-2"><Link to="/homeuser">Home Users</Link></div>
          <div className="col-xs-2"><Link to="/testimonials">Testimonials</Link></div>
          <div className="col-xs-2"><Link to="/about">About</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Header
