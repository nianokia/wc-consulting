import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

// ------ MUI IMPORTS ------
import { styled, Container, Button, useMediaQuery } from '@mui/material';

// --- custom MUI components ---
const FormButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.darkest
  },
  borderRadius: 8,
  width: '44%',
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
    <Container className="ContactQuestion" sx={{ maxWidth: isMobile ? 400 : isMidSize ? 760 : 1200, backgroundColor: "secondary.main", p: "25px", m: isMobile ? '12px auto' : '30px auto' }}>
      <h2 style={{textAlign: "center", color: 'var(--background-color)'}}>
        Are you a client or professional?
      </h2>
      <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "30px"}}>
        <FormButton checked={checked} onClick={() => {
          navigate('/contact/client'); 
          handleFormTransition();
        }}>
          Client
        </FormButton>
        <FormButton checked={checked} onClick={() => {
          navigate('/contact/professional');
          handleFormTransition();
        }}>
          Professional
        </FormButton>
      </div>
    </Container>
  )
}

export default ContactQuestion