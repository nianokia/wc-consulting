import React from "react";
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";

// PURPOSE - Displays details regarding hours, location, contact methods, and a question 
// directing users to a client or professional form to fill out to express interest in services

const ContactHome = () => {
  return (
    <>
      <Header />
      <h1>Contact Home</h1>

      {/* SWITCH BETWEEN QUESTION, CLIENT FORM, & PROFESSIONAL FORM */}
      <Link to='/contact/question'>Question</Link>
      <Link to='/contact/client'>Client</Link>
      <Link to='/contact/professional'>Professional</Link>

      {/* This Outlet is where the child routes above will be rendered on the parent component (Contact Home) */}
      <Outlet />

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