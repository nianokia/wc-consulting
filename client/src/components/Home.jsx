import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

// ------ PURPOSE ------
// Introduces visitor to the business and invites the user to explore more

const Home = () => {
  // --- state method that app intends to use from useAuth0 hook ---
  const { loginWithRedirect } = useAuth0();

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
      <div style={{display: 'flex', justifyContent: 'space-around', gap: '20px'}}>
        <button onClick={() => loginWithRedirect()}>Admin Login</button>
        <Link to='/list'>Admin List</Link>
      </div>
      
      {/* FOOTER COMP */}
    </div>
  );
}

export default Home