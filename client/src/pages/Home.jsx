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
    <Container id="Home" sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1200 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? 760 : 1660, 
      width: '100%',
      m: '10px auto',
      mb: '0',
    }}>
      <Header />

      <Hero title="Wright Choice Consulting" tagline="Solution Focused Brief Therapy" image="../walkbridge.png" textalign='center' button="Contact" link="/contact"/>
      
      {/* ------ BACKGROUND SECTION ------ */}
      <Box id='backgroundBlock' sx={{
        display: 'block',
        width: '75%',
        m: '10px auto',
        mb: '28px',
        textAlign: 'center',
        p: isMobile ? '25px 35px' : '25px 70px',
        borderRadius: '10px',
        backgroundColor: 'primary.main'
      }}>
        <Typography variant='h4' sx={{ fontSize: isMobile ? '15px' : '28px', mb: 1 }}>
          Your trusted partner in Mental Health:
        </Typography>
        <Typography variant='h4' sx={{ fontSize: isMobile ? '15px' : '24px', mb: 2 }}>
          Navigating Life's Challenges Together.
        </Typography>
        {/* ------ SERVICES BUTTON ------ */}
        <Button onClick={() => navigate('/services')} variant='contained' sx={{
          backgroundColor: 'background.main',
          color: 'primary.darker',
          '&:hover': { backgroundColor: 'primary.lighter', color: 'primary.darker' }
        }}>
          Services
        </Button>
      </Box>

      {/* ------ ABOUT SECTION ------- */}
      <Box id='aboutBlock' sx={{
        display: 'flex',
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        justifyContent: 'space-around',
        mb: '34px',
        textAlign: 'center',
        p: isMobile ? '20px 5px' : '20px',
        backgroundColor: 'secondary.main',
        color: 'secondary.lightest'
      }}>
        <Box id='headshot2' sx={{ 
          p: isMobile ? '5px' : '10px',
          color: 'background.darkest',
          width: isMobile ? '25%' : 'none'
        }}>
          <img src="../headshot2.png" alt="Picture of Gregory Wright with transparent background"  width={isMobile ? '120px' : isMidSize ? '' : '320px'} />
        </Box>
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: "20px",
          justifyContent: 'center',
          width: isMobile ? '58%' : 'none'
        }}>
          <aside style={{ padding: '0 10px', width: '90%', alignSelf: 'center' }}>
            <Typography variant='h5' sx={{ textAlign: 'start', fontSize: isMobile ? '16px' : isMidSize ? '' : '28px' }}>
              "<em>I always say sometimes therapy can feel worse before it gets better, but there is <strong>always</strong> light at the end of the tunnel.</em>"
            </Typography>
            <Typography variant='overline' sx={{ fontSize: isMobile ? '12px' : '16px' }}>
              <em>- Gregory Wright, LPCS</em>
            </Typography>
          </aside>
          {
            isMobile ? (
              null
            ) : (
              <>
                <Box sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'space-between',
                  gap: '20px',
                  width: '90%',
                  m: '0 auto'
                }}>
                  <Typography variant='body1' sx={{
                    display: 'block',
                    width: '50%',
                    backgroundColor: 'secondary.light',
                    color: 'secondary.darkest',
                    borderRadius: '8px',
                    p: 1,
                    alignContent: 'center'
                  }}>
                    We offer services for families, couples and individuals looking for a hand in navigating life's challenges.
                  </Typography>
                  <Typography variant='body1' sx={{
                    display: 'block',
                    width: '50%',
                    backgroundColor: 'secondary.light',
                    color: 'secondary.darkest',
                    borderRadius: '8px',
                    p: 1,
                    alignContent: 'center'
                  }}>
                    If you're seeking therapy or professional services (licensed supervision hours, conference invitations, EAP referrals), you can send me a message and I'll be in touch!
                  </Typography>
                </Box>
                {/* ------ ABOUT BUTTON ------ */}
                <Button onClick={() => navigate('/about')} variant='contained' sx={{ 
                  display: 'block',
                  width: '15%',
                  m: '10px auto',
                  backgroundColor: 'accent.main',
                  color: 'accent.darkest',
                  '&:hover': { backgroundColor: 'accent.light', color: 'accent.darkest' }
                }}>
                  About
                </Button>
              </>
            )
          }
        </Box>
        {
          isMobile ? (
            <>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '95%',
                m: '0 auto'
              }}>
                <Typography variant='body1' sx={{
                  width: '95%',
                  mt: 1,
                  backgroundColor: 'secondary.light',
                  color: 'secondary.darkest',
                  borderRadius: '8px',
                  p: 1,
                  fontSize: '15px',
                }}>
                  We offer services for families, couples and individuals looking for a hand in navigating life's challenges.
                </Typography>
                <Typography variant='body1' sx={{
                  width: '95%',
                  mb: 1,
                  backgroundColor: 'secondary.light',
                  color: 'secondary.darkest',
                  borderRadius: '8px',
                  p: 1,

                }}>
                  If you're seeking therapy or professional services (licensed supervision hours, conference invitations, EAP referrals), you can send me a message and I'll be in touch!
                </Typography>
              </Box>
              {/* ------ ABOUT BUTTON ------ */}
              <Button onClick={() => navigate('/about')} variant='contained' sx={{ 
                display: 'block',
                width: '30%',
                m: '10px auto',
                backgroundColor: 'accent.main',
                color: 'accent.darkest',
                '&:hover': { backgroundColor: 'accent.light', color: 'accent.darkest' }
              }}>
                About
              </Button>
            </>
          ) : (
            null
          )
        }
        
      </Box>

      {/* ------ add Login Button with Auth0 ------ */}
      <Box className='loginButton' sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button variant='contained' onClick={() => loginWithRedirect()} sx={{
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