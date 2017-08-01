import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target="#navbarToggler" aria-expanded="false" aria-controls="navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">A to Z</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <div className="nav navbar-nav" style={{textAlign: "center"}}>
            <button className="btn-link navbar-btn"><Link to="/smallbusiness">Small Business</Link></button>
            <button className="btn-link navbar-btn"><Link to="/homeuser">Home Users</Link></button>
            <button className="btn-link navbar-btn"><Link to="/testimonials">Testimonials</Link></button>
            <button className="btn-link navbar-btn"><Link to="/about">About</Link></button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
