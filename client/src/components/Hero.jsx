import React from "react";
import { useNavigate } from "react-router-dom";

/* ------ PURPOSE ------
  Display a hero on certain pages with an image, title, and optional button
  - a reusable component thats called in many components while being editted in one component (normalizes code)
*/

const Hero = ({ title, image, button, textalign, tagline, link }) => {
  const navigate = useNavigate();
  return (
    
    <div className="Hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image})`}}>
      {textalign === 'center' ? (
        <>
          <h1 style={{textAlign: textalign, margin: "10px"}}>{title}</h1>
          <h3 style={{textAlign: textalign, margin: "10px 0 20px 0"}}>{tagline}</h3>
          <button onClick={() => navigate(link)} style={{display: "block", margin: "auto"}}>
            {button}
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