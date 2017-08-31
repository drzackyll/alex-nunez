import React from 'react'

const Small = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="col-sm-8 col-sm-offset-2">Small Businesses</h3>
      </div>
      <div className="row">
        <div className="col-sm-5 col-sm-offset-2">
          <a className="anchor" name="smallbusiness" />
          <h4>A2Z Tech Group offers top quality onsite support for small businesses/home businesses at an affordable price.</h4>
          <ul>
            <li>Windows Server 2008, 2012 & 2016</li>
            <li>Virus and Spyware Removal </li>
            <li>Disaster Recovery Services</li>
            <li>Windows 7, 8 & 10</li>
            <li>Microsoft Office Products</li>
          </ul>
        </div>
        <div className="col-sm-3">
          <img style={{width: "100%"}} src="../../images/support.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Small
