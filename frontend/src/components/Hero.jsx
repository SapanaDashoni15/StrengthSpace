import React from 'react'

const Hero = () => {
  return (
    
    <section className='hero'>
      <div className='content'>
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to fitness starts here</p>
          <p>Unleash your potential</p>
        </div>
        <div className="buttons">
          {/* First Button with Link */}
          <a href="#sessions">
            <button>Start your journey</button>
          </a>
          {/* Second Button with Link */}
          <a href="#pricetag">
            <button>Discover your plan</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero 