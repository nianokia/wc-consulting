import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import PsychWidget from "../components/PsychWidget";

// ------ MUI IMPORTS ------
import { useMediaQuery, Container, Box, Typography, Button } from "@mui/material";

/* ------ PURPOSE ------
  Provides background information about the owner 
*/

const About = () => {
  const navigate = useNavigate();

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 1024px)');

  return (
    <Container id='About' sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1024 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? 500 : 1660, 
      width: '100%', 
      m: '10px auto',
    }}>
      <Header />
      <Typography variant='h1' sx={{ fontSize: isMobile ? '36px' : '48px', mt: 2 }}>
        About
      </Typography>
      <hr />
      <Box id='aboutContent' sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0px' : '20px' }}>
        <Box id='headshotAndTitle' sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          m: isMobile ? '0 auto' : '0',
          pl: isMobile ? 'auto' : isMidSize ? 'auto' : 7,
          width: isMobile ? 'none' : '35%'
        }}>
            <img src='../headshot.png' alt="Headshot of Gregory B Wright in front of a white background. He's a black man wearing a black blazer, a white buttondown shirt, and a striped black and brown tie." style={{ width: isMobile ? '260px' : isMidSize ? '260px' : '410px', margin: '0 auto' }} />
            <Typography variant='h2' sx={{
              my: 1,
              mr: isMidSize ? '0px' : '140px',
              textAlign: isMidSize ? 'center' : 'end',
              fontSize: isMobile ? '24px' : isMidSize ? '30px' : '36px'
            }}>
              Gregory B Wright
            </Typography>
            <Typography variant='h3' sx={{
              mt: 0,
              mr: isMidSize ? '0px' : '140px',
              textAlign: isMidSize ? 'center' : 'end',
              fontSize: isMobile ? '14px' : isMidSize ? '20px' : '22px'
            }}>
              LPCS - Sole Proprietor
            </Typography>
        </Box>
        <Box id="biography" sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: isMobile ? 'auto' : '65%'
        }}>
          <article style={{
            fontSize: '18px',
            textAlign: 'justify',
            margin: isMobile ? '10px' : 'auto',
            marginRight: isMobile ? 'none' : isMidSize ? '10px' : '100px'
          }}>
            <Typography variant='body1' sx={{ my: 3.5, fontSize: isMobile ? '16px' : isMidSize ? '15px' : '20px' }}>
              Gregory B. Wright is a Licensed Professional Counselor Supervisor and a seasoned mental health professional with over <strong>20 years of experience</strong>. He specializes in counseling individuals, families, and groups facing a variety of challenges, including youth disruptive behaviors, adults struggling with life challenges, and parenting coaching.
            </Typography>
            <Typography variant='body1' sx={{ my: 3.5, fontSize: isMobile ? '16px' : isMidSize ? '15px' : '20px' }}>
              As the sole proprietor of Wright Choice Consulting, LLC, Gregory addresses a wide range of mental health concerns and crises, i.e. Criminal Domestic Violence and Anger Management Groups. The main goal of this practice is to facilitate transformative therapy to promote healthy coping mechanisms and conflict resolution.
            </Typography>
            <Typography variant='body1' sx={{ my: 3.5, fontSize: isMobile ? '16px' : isMidSize ? '15px' : '20px' }}>
              Gregory holds a Bachelor's degree in Sociology from the State University of New York at Brockport and a Master's degree in Counseling from Webster University.
            </Typography>
            <Typography variant='body1' sx={{ my: 3.5, fontSize: isMobile ? '16px' : isMidSize ? '15px' : '20px' }}>
              Prior to his private practice, Gregory served as a certified trainer for Therapeutic Crisis Intervention, providing invaluable training to a high management group home. His extensive experience and dedication to his clients make him a valuable resource for those seeking support and guidance.
            </Typography>            
          </article>

          {/* ------ CONTACT BUTTON ------ */}
          <Button variant='contained' onClick={() => navigate('/contact')} sx={{
            backgroundColor: 'accent.main',
            color: 'accent.darkest',
            '&:hover': {
              backgroundColor: 'accent.light',
              color: 'accent.darkest',
            },
            width: isMobile ? '25%' : isMidSize ? '30%' : '25%',
            mt: 4
          }}>
            Contact
          </Button>
          <br />

          <PsychWidget />
          
        </Box>
      </Box>

      <Footer />
    </Container>
  )
}

export default About