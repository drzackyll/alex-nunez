import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target="#navbarToggler">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">A to Z</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="nav navbar-nav">
            <li><Link to="/smallbusiness">Small Business</Link></li>
            <li><Link to="/homeuser">Home Users</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
