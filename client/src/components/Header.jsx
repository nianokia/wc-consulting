import React from "react";
import { Link } from 'react-router-dom';

// PURPOSE - display a header at the top of every page with the business name and logo and a navbar of the company
// its a reusable component that can be called in many components while being editted in one component (normalizes code)

const Header = () => {
 return (
   <div className="Header" style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between"}}>
     <div className="homeButton" style={{display: "flex", flexDirection: "column"}}>
       <div>
         <img src="../public/logo.png" alt="Wright Choice Consulting logo" style={{width: '40px'}} />
         <h4 style={{marginTop: "5px", marginBottom: 0}}>Wright Choice Consulting</h4>
       </div>
       <div>
         <h6 style={{margin: "0px"}}>Family Therapy</h6>
       </div>
     </div>
     <div className="Navbar" style={{display: "flex", gap: "10px"}}>
       <Link to='/about'>About</Link>/
       <Link to='/services'>Services</Link>/
       <Link to='/rates-and-insurance'>Rates/ Insurance</Link>/
       <Link to='/faqs'>FAQs</Link>/
       <Link to='/first-session'>First Session</Link>/
       <Link to='/contact'>Contact</Link>
     </div>
   </div>
 )
}

export default Header

