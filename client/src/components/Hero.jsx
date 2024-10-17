import React from "react";

const Hero = ({ title, image, button }) => {
  return (
    <>
      <div style={{backgroundImage: {image}}}>
        <h1>{title}</h1>
        {button ? (
          <div>
            <button>{button}</button>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Hero