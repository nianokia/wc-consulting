import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// PURPOSE - Communciates the available services to the visitor, such as family, individual, and couples therapy

const Services = () => {
  return (
    <>
      <Header />
      <h1>Services Page</h1>

      <div className="serviceType">
        <h3>Family Therapy</h3>
        <summary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ex sem, non dapibus tellus sagittis non. Sed eu sapien ultrices, consectetur metus id, pulvinar ante. Sed vehicula laoreet mi, lobortis luctus diam sodales at. Nulla massa quam, egestas a dolor eu, porta laoreet ligula. 
        </summary>
      </div>

      <div className="serviceType">
        <h3>Couples Therapy</h3>
        <summary>
          Nam cursus dolor augue, ut sodales lorem congue eu. Phasellus ultricies, nulla a eleifend ultricies, lorem ligula facilisis nunc, luctus aliquet ante eros quis nibh. Nunc sit amet egestas lorem. Sed in dolor augue. In eget nunc vel mauris elementum dignissim in id lacus. Praesent vel quam at est interdum luctus sed vel leo.
        </summary>
      </div>

      <div className="serviceType">
        <h3>Individuals Therapy</h3>
        <summary>
          Quisque ac dolor odio. Suspendisse luctus magna nec lacus hendrerit, ac varius magna imperdiet. Mauris in magna a libero tempus venenatis bibendum vitae tortor. Vestibulum condimentum quam nisi, at suscipit tortor venenatis a. In gravida laoreet vulputate. Mauris vel quam felis.
        </summary>
      </div>

      <br />

      <section>
        <h5>Questions?</h5>
        <button>
          <Link to='/contact'>Contact</Link>
        </button>
        <br />
        <br />
        <button>
          <Link to='/faqs'>FAQ</Link>
        </button>
      </section>
      <br />

      <hr />
      <Footer />
    </>
  )
}

export default Services