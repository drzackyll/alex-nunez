import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
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
            <button className="btn-link navbar-btn"><a href="#homeuser">Home Users</a></button>
            <button className="btn-link navbar-btn"><a href="#smallbusiness">Small Business</a></button>
            <button className="btn-link navbar-btn"><a href="#testimonials">Testimonials</a></button>
            <button className="btn-link navbar-btn"><a href="#about">About</a></button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
