import React from 'react'

const HomeUser = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="col-sm-8 col-sm-offset-2">Home Users</h3><br/>
      </div>
      <div className="row">
        <div className="col-sm-3 col-sm-offset-2">
          <img style={{width: "100%"}} src="../../images/home.jpg" alt="" />
        </div>
        <div className="col-sm-5">
          <a className="anchor" name="homeuser" />
          <h4>We are faster, smarter and cheaper than the Geek Squad, Firedog or any other canned tech support that the large stores try to sell.  We will ensure your data is backed up, protected and restored during every support call.</h4>
          <ul>
            <li>Spyware and Virus Removal</li>
            <li>Windows XP – Windows 7 support</li>
            <li>Microsoft Office products support</li>
            <li>Apple OSX</li>
            <li>Backup solutions for home users</li>
            <li>Wireless Router Configuration and Troubleshooting</li>
            <li>Wireless Printing and Print Server configuration</li>
            <li>Hardware repairs and upgrades  for laptops and desktops (hard drives, RAM, video cards, power supplies, etc)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeUser
