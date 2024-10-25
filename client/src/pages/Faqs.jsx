import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

// PURPOSE - Displays list of FAQs with a table of contents that jumps to that specific question on the page

const Faqs = () => {
  return (
    <>
      <Header />

      <div className="faq-col">
        <h1>FAQs</h1>
        <section>
          <h4>Questions</h4>
          <ul>
            {/* Jumps to the specific question on the page onclick */}
            <li><a href="#q1">Question 1</a></li>
            <li><a href="#q2">Question 2</a></li>
            <li><a href="#q3">Question 3</a></li>
            <li><a href="#q4">Question 4</a></li>
            <li><a href="#q5">Question 5</a></li>
          </ul>
          <button>
            <Link to='/contact'>Contact</Link>
          </button>
        </section>
      </div>

      <div className="faq-col">
        <article>
          <section className="faq-qa" id="q1">
            <h3>Question 1</h3>
            <p>
              Turpis vehicula dis proin malesuada semper. Magna suscipit vitae iaculis lectus purus aptent.
            </p>
          </section>
          <section className="faq-qa" id="q2">
            <h3>Question 2</h3>
            <p>
              Blandit maecenas sollicitudin himenaeos ullamcorper urna facilisis vulputate. Habitasse nisl viverra semper tincidunt nisl dis aptent praesent. Proin himenaeos diam luctus, tellus eget eros turpis.
            </p>
          </section>
          <section className="faq-qa" id="q3">
            <h3>Question 3</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis tempus curabitur tristique leo sapien porta adipiscing aptent etiam.
            </p>
          </section>
          <section className="faq-qa" id="q4">
            <h3>Question 4</h3>
            <p>
              Velit eu ornare inceptos enim quisque luctus torquent. Urna aliquam ultricies himenaeos dictum; metus montes cursus.
            </p>
          </section>
          <section className="faq-qa" id="q5">
            <h3>Question 5</h3>
            <p>
              Vulputate scelerisque ad vestibulum primis; inceptos magnis mi. Nunc nostra mauris mi elementum suscipit donec lacus himenaeos.
            </p>
          </section>
        </article>
      </div>

      <hr />
      <Link to='/'>Home</Link>
      {/* FOOTER COMP */}
    </>
  )
}

export default Faqs