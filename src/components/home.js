import React from 'react'

const Home = () => {
  return (
    <div className="container-fluid">
    <br />
    <br />
      <div className="row">
        <div className="col-sm-3 col-sm-offset-2">
          <img src={require("../../public/images/martin.jpg")} style={{maxWidth: "100%", maxHeight: "100%"}} alt="Alex Nunez"/>
        </div>
        <div className="col-sm-3">
          <b>What I Offer</b><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <div className="col-sm-2">
          <b>What Clients Say</b><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."<br />
          -Satisfied Customer 1<br /><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."<br />
          -Satisfied Customer 2
        </div>
      </div>
    </div>
  )
}

export default Home
