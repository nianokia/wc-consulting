import React from "react";
import { Link } from "react-router-dom";

const ContactHome = () => {
  return (
    <>
      {/* HEADER COMP */}
      <h1>Contact Home</h1>

      {/* SWITCH BETWEEN QUESTION, CLIENT FORM, & PROFESSIONAL FORM */}

      <div>
        <section>
          <span>Hours: </span><span>Monday - Friday -- Upon request/ Evenings, Saturday -- 10 AM - 3 PM</span>
        </section>
        <br />
        <section>
          <span>Email :</span><span>wrightchoiceconsulting@gmail.com</span>
        </section>
        <br />
        <section>
          <span>Phone:</span><span>(866)323-7260</span>
        </section>
        <br />
        <section>
          <span>Location :</span><span>250 South Pleasantburg Drive, Greenville, SC, 29607</span>
        </section>
      </div>

      <hr />
      <Link to='/'>Home</Link>
      {/* FOOTER COMP */}
    </>
  )
}

export default ContactHome