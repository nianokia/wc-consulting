import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// PURPOSE - Communicates details regarding rates, insurance, payment methods, and the cancellation policy

const RatesInsurance = () => {
  return (
    <>
      <Header />
      {/* HERO comp */}
      <Hero title="Rates & Insurance" image="../walkbridge.png" />
      <h1>Rates & Insurance</h1>

      <div>
        <section className="rate-sections">
          <h3>Rates</h3>
          <summary>
            Diam hac nostra curae curae proin montes; sem netus integer. Parturient senectus duis fusce integer ex luctus. Enim iaculis duis rutrum rhoncus pharetra elementum elementum mollis. Efficitur vulputate iaculis hac senectus bibendum platea. Magnis odio volutpat felis porttitor vel egestas finibus nam lectus.
          </summary>
        </section>
        
        <section className="rate-sections">
          <h3>Insurance</h3>
          <summary>
            Velit elit sed cursus nam a urna eu phasellus. Fringilla facilisis posuere sem cursus habitant lorem. Vehicula praesent nam mauris primis mollis aptent senectus pretium.
          </summary>
        </section>
        
        <section className="rate-sections">
          <h3>Payment</h3>
          <summary>
            Duis non suscipit aenean habitasse hac commodo platea primis. Non senectus laoreet dapibus per hendrerit diam. Id interdum montes et non curabitur adipiscing tincidunt, imperdiet nam. Quis platea suspendisse nunc vestibulum ante in facilisi natoque.
          </summary>
        </section>

        <section className="rate-sections">
          <h3>Cancellation Policy</h3>
          <summary>
            Arcu nec elementum venenatis porta dis sociosqu suspendisse habitasse. Ligula tellus augue condimentum ornare hac; curae integer.Aliquet cras eget dignissim rutrum odio praesent accumsan. Sagittis mattis tempor felis himenaeos vivamus.
          </summary>
        </section>

        <section className="rate-sections">
          <h3>Questions?</h3>
          <summary>
            <button>
              <Link to='/contact'>Contact</Link>
            </button>
            <br />
            <br />
            <button>
              <Link to='/faqs'>FAQs</Link>
            </button>
          </summary>
        </section>

      </div>
      <br />

      <hr />
      <Footer />
    </>
  )
}

export default RatesInsurance