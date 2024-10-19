import React from "react";
import { Link } from "react-router-dom";

// PURPOSE - Displays question on ContactHome component to direct user to 2 the client or professional form

const ContactQuestion = () => {
  return (
    <>
      <h2>Are you a client or professional?</h2>
      <button>
        <Link to='/contact/client'>Client</Link>
      </button>
      <button>
        <Link to='/contact/professional'>Professional</Link>
      </button>
    </>
  )
}

export default ContactQuestion