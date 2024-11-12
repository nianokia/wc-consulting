import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactQuestion from "../components/ContactQuestion";
import { Outlet } from "react-router-dom";

// ------ MUI IMPORTS ------
import { useMediaQuery, Container, Box, Typography } from '@mui/material';

/* ------ PURPOSE ------
  Displays details regarding hours, location, contact methods, and a question directing users to a client or professional form to fill out to express interest in services.
*/

const ContactHome = () => {
  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  return (
    <Container id="Contact" sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1200 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? 760 : 1660, 
      width: '100%', 
      m: '10px auto',
    }}>
      <Header />
      <Typography variant='h1' sx={{ fontSize: isMobile ? '36px' : '48px', mt: 2, ml: 1 }}>
        Contact
      </Typography>
      <hr />

      <ContactQuestion />

      {/* Outlet = where form will be rendered on the parent component (ContactHome) */}
      <Outlet />

      {/* ------ CONTACT INFORMATION SECTION ------ */}
      <Box sx={{ mb: '115px', ml: isMobile ? 1 : 3 }}>
        <Box sx={{
          display: "flex",
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : '70%',
          alignItems: 'start',
          gap: '20px'
        }}>
          <Typography variant='h4' sx={{ m:'0', width: '18%' }}>
            Hours: 
          </Typography>
          <Box>
            <Typography variant='body1' sx={{ m: '0', fontSize: isMobile ? '16px' : '18px' }}>
              Tuesday -- 6 PM - 8 PM (virtual only)
            </Typography>
            <Typography variant='body1' sx={{ mt: '5px', mb: 0, fontSize: isMobile ? '16px' : '18px' }}>
              Saturday -- 10 AM - 3 PM
            </Typography>
          </Box>
        </Box>
        <br />
        <Box sx={{
          display: "flex",
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : '70%',
          alignItems: 'start',
          gap: '20px'
        }}>
          <Typography variant='h4' sx={{margin: "0", width: "18%"}}>
            Email:
          </Typography>
          <Typography variant='body1' sx={{ fontSize: isMobile ? '16px' : '18px', alignSelf: isMobile ? 'start' : 'center' }}>
            wrightchoiceconsulting@gmail.com
          </Typography>
        </Box>
        <br />
        <Box sx={{
          display: "flex",
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : '70%',
          alignItems: 'start',
          gap: '20px'
        }}>
          <Typography variant='h4' sx={{margin: "0", width: "18%"}}>
            Phone:
          </Typography>
          <Typography variant='body1' sx={{ fontSize: isMobile ? '16px' : '18px', alignSelf: isMobile ? 'start' : 'center' }}>
            (866) 323-7260
          </Typography>
        </Box>
        <br />
        <Box sx={{
          display: "flex",
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : '70%',
          alignItems: 'start',
          gap: '20px'
        }}>
          <Typography variant='h4' sx={{ margin: "0", width: "18%" }}>
            Location:
          </Typography>
          <Typography variant='body1' sx={{ fontSize: isMobile ? '16px' : '18px', alignSelf: 'center' }}>
            250 South Pleasantburg Drive, Greenville, SC, 29607
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Container>
  )
}

export default ContactHome