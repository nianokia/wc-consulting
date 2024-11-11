import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactQuestion from "../components/ContactQuestion";
import { Outlet } from "react-router-dom";

// ------ MUI IMPORTS ------
import { Container, Box, useMediaQuery } from '@mui/material';

/* ------ PURPOSE ------
  Displays details regarding hours, location, contact methods, and a question directing users to a client or professional form to fill out to express interest in services.
*/

const ContactHome = () => {
  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  return (
    <Container className="Contact" sx={{ maxWidth: isMobile ? 400 : isMidSize ? 760 : 1200, m: '10px auto' }}>
      <Header />
      <h1>Contact</h1>
      <hr />

      <ContactQuestion />

      {/* Outlet = where form will be rendered on the parent component (ContactHome) */}
      <Outlet />

      <Box sx={{ mb: '115px' }}>
        <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : '70%', alignItems: 'start', gap: '20px' }}>
          <h4 style={{margin:'0', width: '18%'}}>Hours: </h4>
          <span>
            <p style={{margin: '0'}}>
              Tuesday -- 6 PM - 8 PM (virtual only)
            </p>
            <p style={{marginTop: '5px', marginBottom: '0px'}}>
              Saturday -- 10 AM - 3 PM
            </p>
          </span>
        </Box>
        <br />
        <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : '70%', alignItems: 'start', gap: '20px' }}>
          <h4 style={{margin: "0", width: "18%"}}>Email:</h4>
          <span>wrightchoiceconsulting@gmail.com</span>
        </Box>
        <br />
        <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : '70%', alignItems: 'start', gap: '20px' }}>
          <h4 style={{margin: "0", width: "18%"}}>Phone:</h4>
          <span>(866)323-7260</span>
        </Box>
        <br />
        <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : '70%', alignItems: 'start', gap: '20px' }}>
          <h4 style={{margin: "0", width: "18%"}}>Location:</h4>
          <span>250 South Pleasantburg Drive, Greenville, SC, 29607</span>
        </Box>
      </Box>

      <Footer />
    </Container>
  )
}

export default ContactHome