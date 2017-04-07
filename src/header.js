import React from 'react'

const Header = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>A l e x N u ñ e z</h1>
      <h3>IT Consultant</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">Home</div>
          <div className="col-xs-2">About</div>
          <div className="col-xs-2">FAQ</div>
          <div className="col-xs-2">Hire Me</div>
        </div>
      </div>
    </div>
  )
}

export default Header
