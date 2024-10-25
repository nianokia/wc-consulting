import React from 'react'
import Header from "../components/Header";
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
      {/* HERO COMP */}
      <h1>HOMEPAGE</h1>
      
      <hr />

      
      <hr />

      {/* --- add Login Button with Auth0 --- */}
      <div className='loginButton' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={handleLogin}>
          Admin Login
        </button>
      </div>
      
      {/* FOOTER COMP */}
    </div>
  );
}

export default Home