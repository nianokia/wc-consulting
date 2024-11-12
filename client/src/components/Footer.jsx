import React from "react";

// ------ MUI IMPORTS ------
import { useMediaQuery, Box } from "@mui/material";
import { Copyright } from "@mui/icons-material";

/* ------ PURPOSE ------ 
  Display a footer at the end of every page with the name of the company.
  - a reusable component thats called in many components while being editted in one component (normalizes code)
*/

const Footer = () => {
  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 1024px)');

  return (
    <Box sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1024 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? 500 : 1550,
      m: '0 auto',
      mt: '25px',
      p: isMobile ? '5px 10px' : isMidSize ? '5px 10px' : '5px 25px',
      backgroundColor: '#bbc7ce',
      fontFamily: 'poppins.font'
    }}>
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
        <Copyright sx={{ fontSize: '18px', mr: 0.5 }}/> Wright Choice Consulting</footer>
    </Box>
  )
}

export default Footer