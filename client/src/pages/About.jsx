import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// PURPOSE - Provides background information about the owner 

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <h1>About</h1>
      <hr />
      <div className="aboutContent" style={{display: "flex", gap: "20px"}}>
        <div className="name-and-headshot">
            <img src="../headshot.jpeg" alt="Headshot of Gregory B Wright in front of a black background. He's a black man wearing glasses, a black blazer, a white buttondown shirt, and a paid navy and blue tie." />
            <h2 style={{marginBottom: "6px", textAlign: "end"}}>
              Gregory B Wright
            </h2>
            <h3 style={{marginTop: "0", textAlign: "end"}}>
              LPCS - Sole Proprietor
            </h3>
        </div>
        <div className="about-text-content" style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
          <article style={{fontSize: "18px", textAlign: "justify"}}>
            Gregory B. Wright is a Licensed Professional Counselor Supervisor and a seasoned mental health professional with over <strong>20 years of experience</strong>. He specializes in counseling individuals, families, and groups facing a variety of challenges, including youth disruptive behaviors, adults struggling with life challenges, and parenting coaching.
            <br /><br />
            As the sole proprietor of Wright Choice Consulting, LLC, Gregory addresses a wide range of mental health concerns and crises, i.e. Criminal Domestic Violence and Anger Management Groups. The main goal of this practice is to facilitate transformative therapy to promote healthy coping mechanisms and conflict resolution.
            <br /><br />
            Gregory holds a Bachelor's degree in Sociology from the State University of New York at Brockport and a Master's degree in Counseling from Webster University. 
            <br /><br />
            Prior to his private practice, Gregory served as a certified trainer for Therapeutic Crisis Intervention, providing invaluable training to a high management group home. His extensive experience and dedication to his clients make him a valuable resource for those seeking support and guidance.

          </article>
          <br /><br />
          <button onClick={() => navigate('/contact')} style={{width: "25%"}}>
            Contact
          </button>
          {/* PSYCHOLOGY TODAY BUTTON */}
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default About