import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Container, Typography, Box, Button,  } from '@mui/material';

// --- custom MUI components ---
const FormButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.darkest
  },
  borderRadius: 8,
}))

/* ------ PURPOSE ------
  Displays question on ContactHome component to direct user to 2 the client or professional form
*/

const ContactQuestion = () => {
  const navigate = useNavigate();

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  // --- import checked from useContext ---
  const { checked, setChecked } = useContext(AppContext);

  const handleFormTransition = () => {
    // --- have the form collapse in and out onClick ---
    setChecked((prev) => !prev);
  };

  return (
    <Container className="ContactQuestion" sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1200 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? 760 : 1600,
      width: '100%',
      backgroundColor: "secondary.main",
      p: "25px",
      m: isMobile ? '12px auto' : '30px auto'
    }}>
      <Typography variant='h2' sx={{
        textAlign: "center",
        color: 'background.main',
        fontSize: isMobile ? '24px' : isMidSize ? '36px' : '48px',
        my: 3
      }}>
        Are you a client or professional?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: "30px" }}>
        <FormButton checked={checked} sx={{ width: isMidSize ? '44%' : '25%' }} onClick={() => {
          navigate('/contact/client'); 
          handleFormTransition();
        }}>
          Client
        </FormButton>
        <FormButton checked={checked} sx={{ width: isMidSize ? '44%' : '25%' }} onClick={() => {
          navigate('/contact/professional');
          handleFormTransition();
        }}>
          Professional
        </FormButton>
      </Box>
    </Container>
  )
}

export default ContactQuestion