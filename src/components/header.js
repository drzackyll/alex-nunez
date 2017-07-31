import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">A to Z</a>
        </div>
        <p className="navbar-text">IT Consultants</p>
        <ul className="nav navbar-nav">
          <li><Link to="/smallbusiness">Small Business</Link></li>
          <li><Link to="/homeuser">Home Users</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
