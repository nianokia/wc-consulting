import React from "react"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// ------ MUI IMPORTS ------
import { useMediaQuery, Container, Box, Typography } from '@mui/material';

/* ------ PURPOSE ------
  A component that users are directed to when the page they're trying to reach doesn't exist
*/

const ErrorPage = () => {
  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 1024px)');

  return (
    <Container sx={{ 
      maxWidth: isMobile ? 400 : isMidSize ? 1024 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? '70vh' : 1660, 
      width: '100%',
    }} >
      <Header />
      <Hero title='404 Not Found' image='../walkbridge.png' />

      <Box sx={{ fontSize: '18px', my: 4 }}>
        <Typography variant="body1">
          Please navigate back to the Home page.
        </Typography>
      </Box>
      <hr />

      <Footer />
    </Container>
  )
}

export default ErrorPage