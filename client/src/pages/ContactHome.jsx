import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactQuestion from "../components/ContactQuestion";
import { Outlet } from "react-router-dom";

/* ------ PURPOSE ------
  Displays details regarding hours, location, contact methods, and a question directing users to a client or professional form to fill out to express interest in services.
*/

const ContactHome = () => {
  return (
    <div className="Contact" style={{width: "760px"}}>
      <Header />
      <h1>Contact Home</h1>

      <ContactQuestion />

      {/* Outlet = where form will be rendered on the parent component (ContactHome) */}
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
      <br /><br />   

      <hr />
      <Footer />
    </div>
  )
}

export default ContactHome