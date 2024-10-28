import React from "react";
import { Link } from "react-router-dom";

// PURPOSE - Displays question on ContactHome component to direct user to 2 the client or professional form

const ContactQuestion = () => {
  return (
    <>
      <h2 style={{textAlign: "center"}}>Are you a client or professional?</h2>
      <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "30px"}}>
        <button>
          <Link to='/contact/client'>Client</Link>
        </button>
        <button>
          <Link to='/contact/professional'>Professional</Link>
        </button>
      </div>
    </>
  )
}

export default ContactQuestion