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
  const { loginWithRedirect } = useAuth0();

  // --- specify redirect URL to '/list' (AdminListEntries.jsx) & appState to current page (Home.jsx) ---
  const handleLogin = () => {
    console.log("Window Location Origin/list: ", `${window.location.origin}/list`);
    loginWithRedirect({
      authorizationParams: { redirect_uri: `${window.location.origin}/list` }, 
      appState: { returnTo: window.location.href } 
    });
  };

  return (
    <div>
      <Header />
      <Hero title="Wright Choice Consulting" tagline="Family Therapy/ Parent Coaching" image="/src/images/walkbridge.png" textalign='center' button="Contact" />
      <h1>HOMEPAGE</h1>
      
      <hr />

      
      <hr />

      {/* --- add Login Button with Auth0 --- */}
      <div className='loginButton' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={handleLogin}>
          Admin Login
        </button>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home