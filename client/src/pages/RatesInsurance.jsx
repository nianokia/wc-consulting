import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

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
  Communicates details regarding rates, insurance, payment methods, and the cancellation policy
*/

const RatesInsurance = () => {
  const navigate = useNavigate();

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 1024px)');

  return (
    <Container id='RatesInsurance' sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1024 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? '70vh' : 1660, 
      width: '100%',
      m: '10px auto',
    }}>
      <Header />

      <Hero title='Rates & Insurance' image='../walkbridge.png' />

      <Box id='ratesInsuranceContent'>
        {/* ------ RATES SECTION ------ */}
        <Box className='rate-sections' sx={{display: 'flex', gap: isMobile ? '25px' : '75px', alignItems: 'center'}}>
          <Typography variant='h3' sx={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            p: '10px',
            mb: 1,
            width: isMobile ? '100px' : isMidSize ? '175px' : '275px',
            textAlign: 'center', 
            fontSize: isMobile ? '18px' : '24px'
          }}>
            Rates
          </Typography>
          <summary style={{ width: isMobile ? '220px' : isMidSize ? '475px' : '80%' }}>
            <Typography variant='body1' sx={{ fontSize: isMobile ? '14px' : '18px' }}>
              <strong>$100 / 55 minute session</strong>
            </Typography>
          </summary>
        </Box>
        <hr />
        {/* ------ INSURANCE SECTION ------ */}
        <Box className='rate-sections' sx={{display: 'flex', gap: isMobile ? '25px' : '75px', alignItems: 'center'}}>
          <Typography variant='h3' sx={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            p: '10px',
            my: 1,
            width: isMobile ? '100px' : isMidSize ? '175px' : '275px',
            textAlign: 'center', 
            fontSize: isMobile ? '18px' : '24px'
          }}>
            Insurance
          </Typography>
          <summary style={{ width: isMobile ? '220px' : isMidSize ? '475px' : '80%' }}>
            <Typography variant='body1' sx={{ fontSize: isMobile ? '14px' : '18px' }}>
              <strong>Accepted Insurances:</strong> Blue Cross Blue Shield (BCBS), Aetna
            </Typography>
          </summary>
        </Box>
        <hr />
        {/* ------ PAYMENT SECTION ------ */}
        <Box className='rate-sections' sx={{display: 'flex', gap: isMobile ? '25px' : '75px', alignItems: 'center'}}>
          <Typography variant='h3' sx={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            p: '10px',
            my: 1,
            width: isMobile ? '100px' : isMidSize ? '175px' : '275px',
            textAlign: 'center', 
            fontSize: isMobile ? '18px' : '24px'
          }}>
            Payment
          </Typography>
          <summary style={{ width: isMobile ? '220px' : isMidSize ? '475px' : '80%' }}>
            <Typography variant='body1' sx={{ mb: 1.5, fontSize: isMobile ? '14px' : '18px' }}>
              If you're with an EAP through CompPsych, you will have an alloted amount of free sessions(<em>typically 6</em>).
            </Typography>
            <Typography variant='body1' sx={{ fontSize: isMobile ? '14px' : '18px' }}>
              After that if you want to continue session you will pay the going rate of $100/ session. With insurance this typically ranges from a copay of $20 - $35.
            </Typography>
          </summary>
        </Box>
        <hr />
        {/* ------ CANCELLATION SECTION ------ */}
        <Box className='rate-sections' sx={{ display: 'flex', gap: isMobile ? '25px' : '75px', alignItems: 'center' }}>
          <Typography variant='h3' sx={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            p: '10px',
            my: 1,
            width: isMobile ? '100px' : isMidSize ? '175px' : '275px',
            textAlign: 'center', 
            fontSize: isMobile ? '18px' : '24px'
          }}>
            Cancellation Policy
          </Typography>
          <summary style={{ width: isMobile ? '220px' : isMidSize ? '475px' : '80%' }}>
            <Typography variant='body1' sx={{ mb: 1.5, fontSize: isMobile ? '14px' : '18px' }}>
              Must cancel <strong>24 hours</strong> in advance to not lose the session.
            </Typography>
            <Typography variant='body1' sx={{ fontSize: isMobile ? '14px' : '18px' }}>
              If you're with an EAP through CompPsych, you lose the free session.
            </Typography>            
          </summary>
        </Box>
        <hr />
        {/* ------ QUESTION BLOCK ------ */}
        <Box sx={{ display: 'flex', alignItems: 'start', gap: '20px', justifyContent: 'end', mt: 5 }}>
          <Typography variant='h6' sx={{
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

      </Box>
      <br />

      <Footer />
    </Container>
  )
}

export default RatesInsurance