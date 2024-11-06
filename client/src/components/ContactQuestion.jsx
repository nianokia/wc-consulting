import React from "react";
import { useNavigate } from "react-router-dom";

/* ------ PURPOSE ------
  Displays question on ContactHome component to direct user to 2 the client or professional form
*/

const ContactQuestion = () => {
  const navigate = useNavigate();
  return (
    <div className="ContactQuestion" style={{backgroundColor: "var(--secondary-color)", padding: "25px", margin: "30px 0"}}>
      <h2 style={{textAlign: "center", color: 'var(--background-color)'}}>Are you a client or professional?</h2>
      <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "30px"}}>
        <button onClick={() => navigate('/contact/client')}>
          Client
        </button>
        <button onClick={() => navigate('/contact/professional')}>
          Professional
        </button>
      </div>
    </div>
  )
}

export default ContactQuestion