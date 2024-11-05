import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

// ------ PURPOSE ------
// Introduces visitor to the business and invites the user to explore more

const Home = () => {
  // --- state method that app intends to use from useAuth0 hook ---
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    return (
      <div>
        <Header />
        <Hero title="Wright Choice Consulting" tagline="Family Therapy/ Parent Coaching" image="../walkbridge.png" textalign='center' button="Contact" link="/contact"/>
        <p>Welcome Admin!</p>
        <button><Link to='/list'>Admin List Entries</Link></button>
        <Footer />
      </div>
    )
  }

  return (
    <div className='Home' style={{width: '760px'}}>
      <Header />
      <Hero title="Wright Choice Consulting" tagline="Family Therapy/ Parent Coaching" image="../walkbridge.png" textalign='center' button="Contact" link="/contact"/>
      
      <section className='backgroundBlock'>
        <h4>Background Information addressing the What? and Why?</h4>
        {/* --- Research how to make this button with ReactRouter link more accessible --- */}
        <button><Link to='/services'>Services</Link></button>
      </section>
      <br />
      <section className='videoBlock' style={{display: 'flex', justifyContent: 'space-around'}}>
        <div className='video'>Video</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: "20px", justifyContent: 'center'}}>
          <aside>"<em>Short blurb/ quote related said in the video</em>"</aside>
          <button><Link to='/about'>About</Link></button>
        </div>
      </section>
      <br />

      {/* --- add Login Button with Auth0 --- */}
      <div className='loginButton' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={() => loginWithRedirect()}>
          Admin Login
        </button>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home