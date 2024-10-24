import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

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
      {/* HERO COMP */}
      <h1>HOMEPAGE</h1>
      
      <hr />
      {/* Links serve as a route to each component */}
      <Link to='/contact'>Contact</Link>
      <br />
      <Link to='/services'>Services</Link>
      <br />
      <Link to='/about'>About</Link>
      <br />
      <Link to='/rates-and-insurance'>Rates/ Insurance</Link>
      <br />
      <Link to='/faqs'>FAQs</Link>
      <br />
      <Link to='/first-session'>First Session</Link>
      <br /><br />
      
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