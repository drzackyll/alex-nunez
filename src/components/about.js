import React from 'react'

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <a className="anchor" name="about" />
        <h3 className="col-sm-8 col-sm-offset-2">About</h3><br/>
      </div>
      <div className="row">
        <div className="col-sm-3 col-sm-offset-2">
          <img style={{width: "90%"}} src="../../images/alejandro.jpg" alt="" />
        </div>
        <div className="col-sm-5">
          I have worked in the information technology field for 20 years, but my interest in computers dates back over 30 years. I very much enjoy helping people solve whatever technology challenges they may be facing. I work with both home users and business owners to help them use technology to improve their lives & businesses.<br /><br />
          Alejandro Nuñez<br />
          anuneznyc@yahoo.com<br />
          000.000.0000
        </div>
      </div>
    </div>
  )
}

export default About
