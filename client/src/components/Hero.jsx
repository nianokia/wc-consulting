import React from "react";
import { Link } from "react-router-dom";

// PURPOSE - display a hero on certain pages with an image, title, and optional button
// its a reusable component that can be called in many components while being editted in one component (normalizes code)

const Hero = ({ title, image, button, textalign, tagline, link }) => {
  return (
    
    <div className="Hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${image})`}}>
      {textalign === 'center' ? (
        <>
          <h1 style={{textAlign: "center", margin: "10px"}}>{title}</h1>
          <h3 style={{textAlign: "center", margin: "10px 0 20px 0"}}>{tagline}</h3>
          <button style={{display: "block", margin: "auto"}}>
            <Link to={link}>{button}</Link>
          </button>
        </>
      ) : (
        <h1 style={{paddingLeft: "50px"}}>{title}</h1>
        )
      }
    </div>
  )
}

export default Hero