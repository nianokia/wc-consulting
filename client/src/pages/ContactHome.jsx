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
      <h1>Contact</h1>
      <hr />

      <ContactQuestion />

      {/* Outlet = where form will be rendered on the parent component (ContactHome) */}
      <Outlet />

      <div style={{marginBottom: "115px"}}>
        <section style={{display: "flex", width: "70%", alignItems: "start", gap: "20px"}}>
          <h4 style={{margin: "0", width: "18%"}}>Hours: </h4>
          <span>
            <p style={{margin: "0"}}>
              Monday - Friday -- Upon request/ Evenings
            </p>
            <p style={{marginTop: "5px", marginBottom: "0px"}}>
              Saturday -- 10 AM - 3 PM
            </p>
          </span>
        </section>
        <br />
        <section style={{display: "flex", width: "70%", gap: "20px"}}>
          <h4 style={{margin: "0", width: "18%"}}>Email :</h4>
          <span>wrightchoiceconsulting@gmail.com</span>
        </section>
        <br />
        <section style={{display: "flex", width: "70%", gap: "20px"}}>
          <h4 style={{margin: "0", width: "18%"}}>Phone:</h4>
          <span>(866)323-7260</span>
        </section>
        <br />
        <section style={{display: "flex", width: "70%", gap: "20px"}}>
          <h4 style={{margin: "0", width: "18%"}}>Location :</h4>
          <span>250 South Pleasantburg Drive, Greenville, SC, 29607</span>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default ContactHome