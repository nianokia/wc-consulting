import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// PURPOSE - Displays list of FAQs with a table of contents that jumps to that specific question on the page

const Faqs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <hr />

      <div className="faqContent" style={{display: "flex", gap: "20px", marginTop: "30px"}}>
        <div className="faq-col" style={{width: "25%"}}>
          <h1>FAQs</h1>
          <section>
            <h4>Questions</h4>
            <ul style={{listStyle: "none", paddingLeft: "0"}}>
              {/* Jumps to the specific question on the page onclick */}
              <li style={{marginBottom: "8px"}}><a href="#q1">What is mental health counseling?</a></li>
              <li style={{marginBottom: "8px"}}><a href="#q2">Who can benefit from mental health counseling?</a></li>
              <li style={{marginBottom: "8px"}}><a href="#q3">How does mental health counseling work?</a></li>
              <li style={{marginBottom: "8px"}}><a href="#q4">How long does mental health counseling take?</a></li>
              <li style={{marginBottom: "8px"}}><a href="#q5">Is mental health counseling confidential?</a></li>
              <li style={{marginBottom: "8px"}}><a href="#q6">What should I look for in a mental health counselor?</a></li>
              <li style={{marginBottom: "8px"}}><a href="#q7">How do I know if mental health counseling is right for me?</a></li>
              <li style={{marginBottom: "8px"}}><a href="#q8">Additional Resources</a></li>
            </ul>
            <button onClick={() => navigate('/contact')}>
              Contact
            </button>
          </section>
        </div>

        <div className="faq-col" style={{width: "75%"}}>
          <article>
            <section className="faq-qa" id="q1">
              <h3>What is mental health counseling?</h3>
              <p>
                Mental health counseling, also known as psychotherapy or talk therapy, is a collaborative process between a trained mental health professional and an individual seeking support for their emotional, psychological, or behavioral well-being. It involves open communication, active listening, and the development of coping strategies and skills to address a range of mental health concerns.
              </p>
            </section>
            <section className="faq-qa" id="q2">
              <h3>Who can benefit from mental health counseling?</h3>
              <p>
                Anyone can benefit from mental health counseling, regardless of age, background, or life circumstances. 
              </p>
            </section>
            <section className="faq-qa" id="q3">
              <h3>How does mental health counseling work?</h3>
              <p>
                The counseling process typically involves regular sessions with a therapist. During these sessions, you'll have the opportunity to discuss your thoughts, feelings, and experiences in a safe and supportive environment. Your therapist will listen attentively, ask questions, and offer guidance and feedback. Together, you'll work towards identifying and addressing the underlying causes of your concerns and develop strategies to improve your overall well-being.
              </p>
            </section>
            <section className="faq-qa" id="q4">
              <h3>How long does mental health counseling take?</h3>
              <p>
                The duration of mental health counseling varies depending on individual needs and goals. Some individuals may benefit from short-term counseling, while others may require longer-term therapy. The frequency of sessions can also vary, with some individuals meeting weekly, bi-weekly, or monthly.
              </p>
            </section>
            <section className="faq-qa" id="q5">
              <h3>Is mental health counseling confidential?</h3>
              <p>
                Yes, mental health counseling is generally confidential. I am legally and ethically bound to keep your information private, except in specific circumstances, such as: disclosure of children, vulnerable adults or animals being physically, emotionally, sexually, emotionally, financially abused or neglected. Also, a duty to warn the general community if you make threats of harm that I deem credible.  

              </p>
            </section>
            <section className="faq-qa" id="q6">
              <h3>What should I look for in a mental health counselor?</h3>
              <p>
                When choosing a counselor, consider the following:
              </p>
              <ul>
                <li>Credentials: Ensure your therapist is licensed and qualified in their field.</li>
                <li>Experience: Look for a therapist with experience in addressing your specific concerns.</li>
                <li>Rapport: Choose a therapist with whom you feel comfortable, it's a good fit and you can establish a trusting relationship.</li>
                <li>Approach: Consider whether you prefer a particular therapeutic approach, such as cognitive-behavioral therapy (CBT), psychodynamic therapy, or solution focus brief  therapy.</li>
              </ul>
            </section>
            <section className="faq-qa" id="q7">
              <h3>How do I know if mental health counseling is right for me?</h3>
              <p>
                If you're struggling with your mental health, feeling overwhelmed, or experiencing persistent negative emotions, mental health counseling may be a valuable option. It's important to remember that seeking help is a sign of strength, not weakness.
              </p>
            </section>
            <section className="faq-qa" id="q8">
              <h3>Additional Resources:</h3>
              <ul>
                <li><a href="https://www.nami.org/" target="_blank">National Alliance on Mental Illness (NAMI)</a></li>
                <li><a href="https://store.samhsa.gov/" target="_blank">MentalHealth.gov</a></li>
                <li>Crisis Text Line: Text HOME to 741741</li>
                <li>988 Suicide & Crisis Lifeline: Call or text 988</li>
              </ul>
            </section>
          </article>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Faqs