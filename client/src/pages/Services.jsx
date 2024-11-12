import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Container, Box, Typography, Button } from '@mui/material';

// --- custom MUI components ---
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.accent.darker,
  backgroundColor: theme.palette.accent.light,
  border: '1px dotted theme.palette.tertiary.darkest',
  '&:hover': {
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.tertiary.darkest
  },
  borderRadius: 8
}))

/* ------ PURPOSE ------
  Communciates the available services to the visitor, such as family, individual, and couples therapy
*/

const Services = () => {
  const navigate = useNavigate();

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  return (
    <Container sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1200 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? 760 : 1660, 
      width: '100%',
      m: '10px auto',
    }} >
      <Header />
      <Typography variant='h1' sx={{ fontSize: isMobile ? '36px' : '48px', mt: 2 }}>
        Services
      </Typography>
      <hr />
      {/* ------ FAMILY THERAPY ------ */}
      <Box className='serviceType' sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        gap: '20px',
        p: '25px',
      }}>
        <Box sx={{ m: '0 auto' }}>
          <Typography variant='h2' sx={{ fontSize: isMobile ? '24px' : '30px', mb: 3 }}>
            Family Therapy
          </Typography>
          <summary style={{ textAlign: 'justify', fontSize: isMobile ? '14px' : '20px' }}>
            Healing together and strengthening bonds one family at a time.
          </summary>
        </Box>
        <Box sx={{ m: '0 auto', width: isMobile ? '300px' : '350px' }}>
          <img src='../family.png' alt='White mother with her son' style={{ width: isMobile ? '300px' : '350px' }}/>
        </Box>
      </Box>
      {/* ------ COUPLES THERAPY ------ */}
      <Box className='serviceType' sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row-reverse',
        gap: '20px',
        p: '25px',
        backgroundColor: 'primary.main'
      }}>
        <Box sx={{ m: '0 auto' }}>
          <Typography variant='h2' sx={{ fontSize: isMobile ? '24px' : '30px', mb: 3 }}>
            Couples Therapy
          </Typography>
          <summary style={{ textAlign: 'justify', fontSize: isMobile ? '14px' : '20px' }}>
            Healthy relationships, Meaningful Connections
          </summary>
        </Box>
        <Box sx={{ m: '0 auto', width: isMobile ? '300px' : '350px' }}>
          <img src='../couple.jpg' alt='biracial couple' style={{ width: isMobile ? '300px' : '350px' }} />
        </Box>
      </Box>
      {/* ------ INDIVIDUALS THERAPY ------ */}
      <Box className='serviceType' sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        gap: '20px',
        p: '25px'
      }}>
        <Box sx={{ m: '0 auto' }}>
          <Typography variant='h2' sx={{ fontSize: isMobile ? '24px' : '30px', mb: 3 }}>
            Individuals Therapy
          </Typography>
          <summary style={{ textAlign: 'justify', fontSize: isMobile ? '14px' : '20px' }}>
            Finding your path, Focusing on Individual Growth
          </summary>
        </Box>
        <Box sx={{ m: '0 auto', width: isMobile ? '300px' : '350px' }}>
          <img src='../individual.jpg' alt='Black woman smiling' style={{ width: isMobile ? '300px' : '350px' }} />
        </Box>
      </Box>
      {/* ------ QUESTION BLOCK ------ */}
      <Box sx={{ display: 'flex', alignItems: 'start', gap: '20px', justifyContent: 'end', mt: 3, mr: isMobile ? 3 : 5 }}>
        <Typography variant='h5' sx={{
          backgroundColor: 'rgba(0,0,0,0.075)',
          width: isMobile ? '25%' : '15%',
          p: '8px 10px',
          borderRadius: '5px',
          textAlign: 'center',
          fontSize: isMobile ? '15px' : '20px'
        }} >
          Questions?
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <StyledButton onClick={() => navigate('/faqs')}>
            FAQs
          </StyledButton>
          <StyledButton onClick={() => navigate('/contact')}>
            Contact
          </StyledButton>
        </Box>
      </Box>
      <br />

      <Footer />
    </Container>
  )
}

export default Services