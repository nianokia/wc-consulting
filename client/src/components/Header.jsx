import React from "react";
import { Link, useNavigate } from 'react-router-dom';

/* ------ PURPOSE ------
  Display a header at the top of every page with the business name and logo and a navbar of the company
  - a reusable component thas called in many components while being editted in one component (normalizes code)
*/
const Header = () => {
  const navigate = useNavigate();
 return (
   <div className="Header" style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between"}}>
    <header onClick={() => navigate('/')} className="homeButton link-style" style={{display: "flex", flexDirection: "column", textDecoration: "none"}}>
      <div>
        <img src="../logo.png" alt="Wright Choice Consulting logo" style={{width: '40px'}} />
        <h4 style={{marginTop: "5px", marginBottom: 0}}>Wright Choice Consulting</h4>
      </div>
      <div>
        <h6 style={{margin: "0px"}}>Family Therapy</h6>
      </div>
    </header>
     <nav className="Navbar" style={{display: "flex", gap: "10px"}}>
       <Link to='/about' className="link-style">About</Link>/
       <Link to='/services' className="link-style">Services</Link>/
       <Link to='/rates-and-insurance' className="link-style">Rates/ Insurance</Link>/
       <Link to='/faqs' className="link-style">FAQs</Link>/
       <Link to='/first-session' className="link-style">First Session</Link>/
       <Link to='/contact' className="link-style">Contact</Link>
     </nav>
   </div>
 )
}

export default Header

