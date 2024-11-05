import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// PURPOSE - Communciates the available services to the visitor, such as family, individual, and couples therapy

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h1>Services</h1>
      <hr />

      <div className="serviceType" style={{display: "flex", gap: "20px", padding: "25px"}}>
        <div>
          <h2>Family Therapy</h2>
          <summary style={{textAlign: "justify"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ex sem, non dapibus tellus sagittis non. Sed eu sapien ultrices, consectetur metus id, pulvinar ante.
          </summary>
        </div>
        <div>
          <img src="../family.jpg" alt="White mother with her son" style={{width: "350px"}}/>
        </div>
      </div>

      <div className="serviceType" style={{display: "flex", gap: "20px", padding: "25px", flexDirection: "row-reverse", backgroundColor: "var(--primary-color)"}}>
        <div>
          <h2>Couples Therapy</h2>
          <summary style={{textAlign: "justify"}}>
            Nam cursus dolor augue, ut sodales lorem congue eu. Phasellus ultricies, nulla a eleifend ultricies, lorem ligula facilisis nunc, luctus aliquet ante eros quis nibh. Nunc sit amet egestas lorem.
          </summary>
        </div>
        <div>
          <img src="../couple.jpg" alt="biracial couple" style={{width: "350px"}} />
        </div>
      </div>

      <div className="serviceType" style={{display: "flex", gap: "20px", padding: "25px"}}>
        <div>
          <h2>Individuals Therapy</h2>
          <summary style={{textAlign: "justify"}}>
            Quisque ac dolor odio. Suspendisse luctus magna nec lacus hendrerit, ac varius magna imperdiet. Mauris in magna a libero tempus venenatis bibendum vitae tortor.
          </summary>
        </div>
        <div>
          <img src="../individual.jpg" alt="Black woman smiling" style={{width: "350px"}} />
        </div>
      </div>

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
      <br />

      <Footer />
    </>
  )
}

export default Services