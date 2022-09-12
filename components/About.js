import React from 'react'



export default function App() {
  return (
    <div className="card--body">
      <h2 className="info--name">Eduardo Lamarche</h2>
      <h6 className="info--job">Frontend Developer</h6>
      <p className='info--web'>lamarche.dev</p>

      <div className="about--buttons">
        <a href="mailto:lamarcheeduardo@gmail.com" classsName="email--text"><div className="button--email"><img src="./images/email.png" alt="" className="email--icon"/>Email</div></a>
        <a href="https://www.linkedin.com/in/lamarcheeduardo/" className="linkedin--text"><div className="button--linkedin"><img src="./images/linkedin.png" alt="" className="linkedin--icon"/>LinkedIn</div></a>
      </div>
      <div className="interest">
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I'm always looking for new things to learn</p>
        <h3>Interest</h3>     
        <p>Coding. Business Management. Finance. Music. Entrepreneur. Stock Market. Travel. Reading. Law. Korean Culture. Coffe</p>
      </div>

    </div>
  )
}