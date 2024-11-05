import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// PURPOSE - Details what a client can expect at their first session.

const FirstSession = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Hero title="First Session" image='../walkbridge.png' />

      <div className="first-session-details">
        <p>
          Your first session, will start out with you filling out consent paperwork that will take no longer than five to ten minutes. Often referred to as an intake session, is an opportunity for you and your therapist to get to know each other and establish a comfortable working relationship.
        </p>
        <p>
          I normally refer to the first session as an interview.  You are interviewing me to make sure I have the skill set to bring value to your situation and would I be a good fit for you.  I am interviewing you to assess if I have the skill set / training to bring value to your problem.  
        </p>
        <p>
          I will then review how long sessions last 53 minutes, therapy rate $150 per session, benefits and risks to counseling, confidentiality, being a mandated reported, how I handle suicidal / homicidal ideations, your role in therapy and my role in therapy. You will share your story on what brings you to therapy.
        </p>
        <p>
        At the end of the first session I will offer your three options:
        <ul>
          <li>
            Option #1:  Sign me up for another session, you are a good fit for me.
          </li>
          <li>
            Option #2:  Let me think about this and I will text you back in a couple of days with a yes or a no to therapy.
          </li>
          <li>
            Option #3: Thanks but no thanks Greg. I will continue to search for another therapist.  Your therapist will likely ask you about your concerns, your history, and your goals for counseling. They may also discuss confidentiality, fees, and the therapy approach they use.
          </li>
        </ul>
        </p>
      </div>
      <br />

      <button style={{float: 'right'}} onClick={() => navigate('/faqs')}>
        FAQs
      </button>
      <br /><br />

      <Footer />
    </>
  )
}

export default FirstSession