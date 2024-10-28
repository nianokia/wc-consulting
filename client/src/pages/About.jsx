import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// PURPOSE - Provides background information about the owner 

const About = () => {
  return (
    <>
      <Header />
      <h1>About</h1>

      <div className="name-and-headshot">
          <h2>Gregory B Wright LPCS</h2>
          <img src="../headshot.jpeg" alt="Headshot of Gregory B Wright in front of a black background. He's a black man wearing glasses, a black blazer, a white buttondown shirt, and a paid navy and blue tie." />
      </div>

      <div className="about-text-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ex sem, non dapibus tellus sagittis non. Sed eu sapien ultrices, consectetur metus id, pulvinar ante. Sed vehicula laoreet mi, lobortis luctus diam sodales at. Nulla massa quam, egestas a dolor eu, porta laoreet ligula. Nam cursus dolor augue, ut sodales lorem congue eu. Phasellus ultricies, nulla a eleifend ultricies, lorem ligula facilisis nunc, luctus aliquet ante eros quis nibh. Nunc sit amet egestas lorem. Sed in dolor augue. In eget nunc vel mauris elementum dignissim in id lacus. Praesent vel quam at est interdum luctus sed vel leo.
      </div>

      <br />

      <button>
        <Link to='/contact'>Contact</Link>
      </button>
      <br /><br />

      <hr />
      <Footer />
    </>
  )
}

export default About