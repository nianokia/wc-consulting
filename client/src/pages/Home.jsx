import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

// ------ MUI IMPORTS ------
import { Container, Box, useMediaQuery, Button, Typography } from '@mui/material';

/* ------ PURPOSE ------
  Introduces visitor to the business and invites the user to explore more
*/

const Home = () => {
  // --- state method that app intends to use from useAuth0 hook ---
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  // --- useNavigate allows me to not rely on Links to navigate to different components ---
  // --- allows me to add navigation to other elements ---
  const navigate = useNavigate();

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    return (
      <div>
        <Header />
        <Hero title="Wright Choice Consulting" tagline="Family Therapy/ Parent Coaching" image="../walkbridge.png" textalign='center' button="Contact" link="/contact"/>
        <p>Welcome Admin!</p>
        <button onClick={() => navigate('/list')}>Admin List Entries</button>
        <Footer />
      </div>
    )
  }
  
  return (
    <Container id="Home" sx={{ maxWidth: isMobile ? 400 : isMidSize ? 760 : 1200, m: '10px auto' }}>
      <Header />

      <Hero title="Wright Choice Consulting" tagline="Family Therapy/ Parent Coaching" image="../walkbridge.png" textalign='center' button="Contact" link="/contact"/>
      
      {/* ------ BACKGROUND SECTION ------ */}
      <Box id='backgroundBlock' sx={{
        display: 'block',
        width: '75%',
        m: '10px auto',
        mb: '28px',
        textAlign: 'center',
        p: isMobile ? '25px 35px' : '50px 70px',
        borderRadius: '10px',
        backgroundColor: 'primary.main'
      }}>
        <Typography variant='h4' sx={{ fontSize: isMobile ? '16px' : '20px', mb: 2 }}>
          Background Information addressing the What? and Why?
        </Typography>
        {/* ------ SERVICES BUTTON ------ */}
        <Button onClick={() => navigate('/services')} sx={{
          backgroundColor: 'background.main',
          color: 'primary.darker',
          '&:hover': { backgroundColor: 'primary.lighter', color: 'primary.darker' }
        }}>
          Services
        </Button>
      </Box>

      {/* ------ VIDEO SECTION ------- */}
      <Box id='videoBlock' sx={{
        display: 'flex',
        justifyContent: 'space-around',
        m: '1',
        mb: '34px',
        textAlign: 'center',
        p: '20px 5px',
        backgroundColor: 'secondary.main',
        color: 'secondary.lightest'
      }}>
        <Box id='video' sx={{ 
          p: isMobile ? '56px 60px' : '80px 150px',
          backgroundColor: 'background.main',
          color: 'background.darkest'
        }}>
          Video
        </Box>
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: "20px",
          justifyContent: 'center'
        }}>
          <aside>
            "<em>Short blurb/ quote related said in the video</em>"
          </aside>
          {/* ------ ABOUT BUTTON ------ */}
          <Button onClick={() => navigate('/about')} sx={{ 
            display: 'block',
            m: '10px auto',
            backgroundColor: 'accent.main',
            color: 'accent.darkest',
            '&:hover': { backgroundColor: 'accent.light', color: 'accent.darkest' }
          }}>
            About
          </Button>
        </Box>
      </Box>

      {/* ------ add Login Button with Auth0 ------ */}
      <Box className='loginButton' sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button variant='outlined' onClick={() => loginWithRedirect()} sx={{
          backgroundColor: 'primary.lightest',
          color: 'background.dark',
          borderRadius: '8px'
        }}>
          Admin Login
        </Button>
      </Box>

      <Footer />
    </Container>
  );
}

export default Home