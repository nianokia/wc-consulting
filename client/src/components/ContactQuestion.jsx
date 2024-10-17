import React from "react";
import { Link } from "react-router-dom";

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