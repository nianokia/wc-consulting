import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// PURPOSE - Communicates details regarding rates, insurance, payment methods, and the cancellation policy

const RatesInsurance = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      {/* HERO comp */}
      <Hero title="Rates & Insurance" image="../walkbridge.png" />

      <div>
        <section className="rate-sections" style={{display: "flex", gap: "75px", alignItems: "center"}}>
          <h3 style={{backgroundColor: "rgba(0,0,0,0.1)", padding: "10px", width: "175px", textAlign: "center"}}>Rates</h3>
          <summary style={{width: "475px"}}>
            Diam hac nostra curae curae proin montes; sem netus integer. Parturient senectus duis fusce integer ex luctus. Enim iaculis duis rutrum rhoncus pharetra elementum elementum mollis. Efficitur vulputate iaculis hac senectus bibendum platea. Magnis odio volutpat felis porttitor vel egestas finibus nam lectus.
          </summary>
        </section>
        <hr />
        
        <section className="rate-sections" style={{display: "flex", gap: "75px", alignItems: "center"}}>
          <h3 style={{backgroundColor: "rgba(0,0,0,0.1)", padding: "10px", width: "175px", textAlign: "center"}}>Insurance</h3>
          <summary style={{width: "475px"}}>
            Velit elit sed cursus nam a urna eu phasellus. Fringilla facilisis posuere sem cursus habitant lorem. Vehicula praesent nam mauris primis mollis aptent senectus pretium.
          </summary>
        </section>
        <hr />
        
        <section className="rate-sections" style={{display: "flex", gap: "75px", alignItems: "center"}}>
          <h3 style={{backgroundColor: "rgba(0,0,0,0.1)", padding: "10px", width: "175px", textAlign: "center"}}>Payment</h3>
          <summary style={{width: "475px"}}>
            Duis non suscipit aenean habitasse hac commodo platea primis. Non senectus laoreet dapibus per hendrerit diam. Id interdum montes et non curabitur adipiscing tincidunt, imperdiet nam. Quis platea suspendisse nunc vestibulum ante in facilisi natoque.
          </summary>
        </section>
        <hr />

        <section className="rate-sections" style={{display: "flex", gap: "75px", alignItems: "center"}}>
          <h3 style={{backgroundColor: "rgba(0,0,0,0.1)", padding: "10px", width: "175px", textAlign: "center"}}>Cancellation Policy</h3>
          <summary style={{width: "475px"}}>
            Arcu nec elementum venenatis porta dis sociosqu suspendisse habitasse. Ligula tellus augue condimentum ornare hac; curae integer.Aliquet cras eget dignissim rutrum odio praesent accumsan. Sagittis mattis tempor felis himenaeos vivamus.
          </summary>
        </section>
        <hr />
        
      <section style={{display: "flex", alignItems: "end", gap: "20px", justifyContent: "end"}}>
        <h5 style={{backgroundColor: "rgba(0,0,0,0.1)", width: "15%", textAlign: "center", padding: "8px 10px"}}>
          Questions?
        </h5>
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <button onClick={() => navigate('/faqs')}>
            FAQs
          </button>
          <button onClick={() => navigate('/contact')}>
            Contact
          </button>
        </div>
      </section>

      </div>
      <br />

      <Footer />
    </>
  )
}

export default RatesInsurance