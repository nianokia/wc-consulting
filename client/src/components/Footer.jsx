import React from "react";

import { useMediaQuery, Box } from "@mui/material";

/* ------ PURPOSE ------ 
  Display a footer at the end of every page with the name of the company.
  - a reusable component thats called in many components while being editted in one component (normalizes code)
*/

const Footer = () => {
  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  return (
    <Box sx={{ maxWidth: isMobile ? 400 : isMidSize ? 760 : 1200, width: '100%' }}>
      <footer>Wright Choice Consulting</footer>
    </Box>
  )
}

export default Footer