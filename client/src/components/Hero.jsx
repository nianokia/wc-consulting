import React from "react";

// PURPOSE - display a hero on certain pages with an image, title, and optional button
// its a reusable component that can be called in many components while being editted in one component (normalizes code)

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