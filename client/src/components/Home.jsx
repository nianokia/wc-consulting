import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* HERO COMP */}
      <h1>HOMEPAGE</h1>
      
      <hr />
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
      <br />
      <Link to='/login'>Admin Access</Link>

      {/* FOOTER COMP */}
    </div>
  );
}

export default Home