import React from "react";
import { useNavigate } from "react-router-dom";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Box, Typography, Button } from '@mui/material';

// --- custom MUI components ---
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.background.contrastText,
  backgroundColor: theme.palette.tertiary.main,
  border: '1px dotted theme.palette.tertiary.darkest',
  '&:hover': {
    backgroundColor: theme.palette.tertiary.light,
    color: theme.palette.tertiary.contrastText
  },
  borderRadius: 8
}))

/* ------ PURPOSE ------
  Display a hero on certain pages with an image, title, and optional button
  - a reusable component thats called in many components while being editted in one component (normalizes code)
*/

const Hero = ({ title, image, button, textalign, tagline, link }) => {
  const navigate = useNavigate();

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  return (
    <Box className="Hero" sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 760 : 1200,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'background.main',
      width: '100%',
      m: isMobile ? '20px 0' : '30px 0',
      padding: isMobile ? '50px 0' : '100px 0',
    }}>
      {textalign === 'center' ? (
        <>
          <Typography variant='h1' sx={{ textAlign: textalign, m: 1, fontSize: isMobile ? '30px' : '48px' }}>
            {title}
          </Typography>
          <Typography variant='h3' sx={{textAlign: textalign, m: '10px 0 20px 0', fontSize: isMobile ? '18px' : '28px'}}>
            {tagline}
          </Typography>
          <StyledButton onClick={() => navigate(link)} sx={{display: 'block', m: 'auto', width: isMobile ? '30%' : '20%' }}>
            {button}
          </StyledButton>
        </>
      ) : (
        <Typography variant='h1' sx={{ pl: isMobile ? '30px' : '50px', fontSize: isMobile ? '30px' : '48px' }}>
          {title}
        </Typography>
      )}
    </Box>
  )
}

export default Hero