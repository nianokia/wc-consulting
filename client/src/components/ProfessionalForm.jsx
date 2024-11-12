import React, { useContext, useReducer, useState } from "react";
import { AppContext } from "../context.jsx";
import { validateEmail, showEmailError, hideEmailError } from "../constants.jsx";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Box, Collapse, Container, TextField, Button } from '@mui/material';

// --- custom MUI components ---
const SubmitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  borderRadius: 8,
  marginTop: '10px',
  marginBottom: '50px',
  width: '30%',
}))

/* ------ PURPOSE ------
  An interest form for professionals to fill out if they want to request services.
  Sends POST request with inputted form data to the server's database
*/

const ProfessionalForm = () => {
  const [errorObject, setErrorObject] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    phoneError: false,
    commentError: false
  });

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 1024px)');

  // --- import checked from useContext ---
  const { checked, setChecked } = useContext(AppContext);

  // --- define empty professtional_entry record ---
  const initialState = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    comment: '',
  }

  function reducer(state, action) {
    switch (action.type) {
      // --- editField works for each input field ---
      case 'editField':
        // --- retain existing state data while updating specified field with input value ---
        return { ...state, [action.field]: action.value };
      case 'reset':
        return { ...initialState };
      default:
        return state;
    }
  }

  // --- declare reducer & useReducer similar to declaring a state & useState ---
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    // --- deconstruct event.target to retrieve name & value ---
    const { name, value } = event.target;

    // --- execute editField case with identified field, name, & value ---
    dispatch({ type: 'editField', field: name, value });
  }

  const clearForm = () => {
    // --- execute reset case ---
    dispatch({ type: 'reset' });
  }

  // --- send POST to its respective POST path in server to accurately send form data to database ---
  const postProfessionalEntry = async (newProfessionalEntry) => {
    return fetch(`${process.env.DOMAIN}/contact/professional/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProfessionalEntry),
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      // --- clear form once data is sent to the database ---
      clearForm();
    })
    .catch((err) => {
      console.error("Error posting professional entry: ", err);
    })
  }

  // --- separate event handler to account for preventing the event listener & to call postProfessionalEntry with the state data ---
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // --- validate email input field ---
    if (!state.email) {
      showEmailError("Email required");
    } else if (!validateEmail(state.email)) {
      showEmailError("Invalid email address");
    } else {
      hideEmailError();
      postProfessionalEntry(state)
      console.log("Professional Entry: ", state);
    }
  }

  return (
    <>
      <Box sx={{ 
        maxWidth: isMobile ? 400 : isMidSize ? 1024 : 1600,
        minWidth: isMobile ? 350 : isMidSize ? 500 : 1440,
        width: '100%',
      }}>
        {/* --- MUI collapse form in & out --- */}
        <Collapse in={checked} timeout={1000}>
          <Container>
            <h2>Professional Form</h2>
            <form onSubmit={handleSubmit}>
              {/* ------ NAME INPUT ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  error={errorObject.firstNameError}
                  label="First Name"
                  name="first_name"
                  value={state.first_name || ''}
                  onChange={(event) => {
                    handleChange(event);
                    setErrorObject((prevState) => ({...prevState, firstNameError: !event.target.value}));
                  }}
                  required
                  placeholder="John"
                  sx={{ my: 1.5, width: '45%', mr: 1 }}
                />
                <TextField
                  label="Last Name"
                  name="last_name"
                  value={state.last_name || ''}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  sx={{ my: 1.5, width: '45%', ml: 1 }}
                />
              </Box>
              {/* ------ PHONE INPUT ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={state.phone || ''}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="(###) ###-####"
                  helperText='Use format: (###) ###-####'
                  inputProps={{ inputMode: 'numeric', pattern: "\\(\\d{3}\\) \\d{3}-\\d{4}" }}
                  sx={{my: 1.5, width: '92%'}}
                />
              </Box>
              {/* ------ EMAIL INPUT ------ */}
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={state.email || ''}
                    onChange={handleChange}
                    required
                    placeholder="abc123@testing.com"
                    sx={{ my: 1.5, width: '92%' }}
                  />
                </Box>
                <div id="emailError" style={{ margin: isMobile ? '0px 15px 20px 0px' : isMidSize ? '0px 30px 20px 0px' : '0px 50px 20px 0px', textAlign: 'end' }}>
                  {errorObject.emailError}
                </div>
              </Box>
              {/* ------ COMMENT INPUT ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  label="Comment"
                  name="comment"
                  value={state.comment || ''}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  maxRows={4}
                  required
                  inputProps={{ maxLength: 400 }}
                  placeholder="Why are you interested in services?"
                  sx={{my: 1.5, width: '92%'}}
                />
              </Box>
              {/* ------ SUBMIT BUTTON ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'end', width:'95%' }}>
                <SubmitButton type="submit">Submit</SubmitButton>  
              </Box>
            </form>
          </Container>
        </Collapse>
      </Box>
    </>
  )
}

export default ProfessionalForm