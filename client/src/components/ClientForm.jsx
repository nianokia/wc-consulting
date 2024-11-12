import React, { useContext, useReducer, useState } from "react";
import { AppContext } from "../context.jsx";
import { validateEmail, showEmailError, hideEmailError } from "../constants.jsx";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Box, Collapse, Container, TextField, FormControl, InputLabel, Select, Grid2, FormControlLabel, Checkbox, MenuItem, Button, Typography } from '@mui/material';

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
  An interest form for prospective clients to fill out.
  Sends POST request with inputted form data to the server's database
*/ 

const ClientForm = () => {
  const [errorObject, setErrorObject] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    typeError: false,
    issuesError: false,
    ageError: false,
    raceError: false, 
    genderError: false
  });

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');

  // --- import checked from useContext ---
  const { checked, setChecked } = useContext(AppContext);

  // --- define empty client_entry record  ---
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    type: '',
    issues: [],
    age: '',
    race: '',
    gender: '',
    comment: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      // --- editField works for each input field ---
      case 'editField':
        // --- retain existing state data while updating specified field with input value ---
        return { ...state, [action.field]: action.value };
      case 'editIssues':
        return { ...state, issues: action.payload }
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

  // --- handle updates to checkbox inputs in Issues label ---
  const handleIssues = (event) => {
    const { checked, value } = event.target;

    // --- set newValue to [value] or null([]) if checked or unchecked ---
    let newValue = checked ? [value] : [];

    // --- execute editIssues case & filter through existing issue key to contain only ---
    dispatch({ 
      type: 'editIssues', 
      payload: [...state.issues.filter((issue) => issue !== value), ...newValue]
    })
  }

  const clearForm = () => {
    dispatch({ type: 'reset' });
  }

  // --- POST to corresponding path in the server to accurately send form data to database ---
  const postClientEntry =  async (newClientEntry) => {
    return fetch(`${process.env.DOMAIN}/contact/client/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClientEntry),
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      clearForm();
    })
    .catch((err) => {
      console.error("Error adding client entry: ", err);
    });
  }

  // --- separate event handler to account for preventing the event listener and to call postClientEntry with the state data ---
  const handleSubmit = (event) => {
    event.preventDefault(); 

    // --- validate email input field ---
    if (!state.email) {
      showEmailError("Email required");
    } else if (!validateEmail(state.email)) {
      showEmailError("Invalid email address");
    } else {
      hideEmailError();

      // --- store state.issues property into variable ---
      const issuesArray = state.issues;

      // --- update the issues property in state to issuesArray ---
      // --- then send this & all other state values to the POST operation ---
      postClientEntry({
        ...state,
        issues: issuesArray
      });
      console.log('Client Entry: ', state);
    }
  }

  return (
    <>
      <Box sx={{
        maxWidth: isMobile ? 400 : isMidSize ? 1200 : 1600,
        minWidth: isMobile ? 350 : isMidSize ? 760 : 1440,
        width: '100%',
      }}>
        {/* --- MUI collapse form in & out --- */}
        <Collapse in={checked} timeout={1000}>
          <Container>
            <h2>Client Form</h2>
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
              {/* ------ TYPE INPUT ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl fullWidth style={{ alignItems: 'center' }}>
                  <InputLabel id="type-label" required sx={{
                    ml: isMobile ? '10px' : isMidSize ? '30px' : '45px'
                  }}>Type of Therapy</InputLabel>
                  <Select
                    labelId="type-label"
                    name="type"
                    value={state.type || ''}
                    onChange={handleChange}
                    required
                    sx={{my: 1.5, width: '92%'}}
                  >
                    <MenuItem value="" disabled>Select an option</MenuItem>
                    <MenuItem value="family">Family</MenuItem>
                    <MenuItem value="couple">Couple</MenuItem>
                    <MenuItem value="individual">Individual</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* ------ ISSUES INPUT ------*/}
              <Box sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                ml: isMobile ? '15px' : isMidSize ? '20px' : '45px'
              }}>
                <Typography sx={{ margin: '0px 20px 0px 10px'}} color="background.dark">
                  Issues:
                </Typography>
                <Grid2 container columns={{ xs: 8, sm: 9, md: 8, xl: 10 }}>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('depression')} onChange={handleIssues} value="depression" />}
                      label="Depression"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('anxiety')} onChange={handleIssues} value="anxiety" />}
                      label="Anxiety"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('stress')} onChange={handleIssues} value="stress" />}
                      label="Stress"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('parenting')} onChange={handleIssues} value="parenting" />}
                      label="Parenting"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('grief_loss')} onChange={handleIssues} value="grief_loss" />}
                      label="Grief/ Loss"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('self-esteem')} onChange={handleIssues} value="self-esteem" />}
                      label="Self-Esteem"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('life_challenges')} onChange={handleIssues} value="life_challenges" />}
                      label="Life Challenges"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('anger')} onChange={handleIssues} value="anger" />}
                      label="Anger Management"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('relationship')} onChange={handleIssues} value="relationship" />}
                      label="Relationship Difficulties"
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, sm: 4, md: 4, xl: 1 }}>
                    <FormControlLabel
                      control={<Checkbox checked={state.issues?.includes('sports')} onChange={handleIssues} value="anger" />}
                      label="Sports Performance"
                    />
                  </Grid2>
                </Grid2>
              </Box>
              {/* ------ AGE INPUT ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  label="Age"
                  name="age"
                  type="number"
                  InputProps={{ inputProps: { min: 18, max: 100 } }}
                  value={state.age || ''}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{my: 1.5, width: '92%'}}
                />
              </Box>
              {/* ------ RACE INPUT ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl fullWidth style={{ alignItems: 'center' }}>
                  <InputLabel id="race-label" sx={{ml: isMobile ? '10px' : isMidSize ? '30px' : '45px'}} required>Race/Ethnicity</InputLabel>
                  <Select
                    labelId="race-label"
                    name="race"
                    value={state.race || ''}
                    onChange={handleChange}
                    required
                    sx={{my: 1.5, width: '92%'}}
                  >
                    <MenuItem value="" disabled>
                      Select an option
                    </MenuItem>
                    <MenuItem value="aian">American Indian or Alaska Native</MenuItem>
                    <MenuItem value="asian">Asian</MenuItem>
                    <MenuItem value="black">Black or African-American</MenuItem>  
                    <MenuItem value="pacific">Native Hawaiian or Other Pacific Islander</MenuItem>
                    <MenuItem value="middle_eastern">Middle Eastern or North African</MenuItem>
                    <MenuItem value="hispanic">Hispanic/ Latino</MenuItem>
                    <MenuItem value="white">White</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                    <MenuItem value="prefer_not_to_say">Prefer not to say</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* ------ GENDER INPUT ------ */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl fullWidth style={{ alignItems: 'center' }}>
                  <InputLabel id="gender-label" sx={{ml: isMobile ? '10px' : isMidSize ? '30px' : '45px'}} required>Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    name="gender"
                    value={state.gender || ''}
                    onChange={handleChange}
                    required
                    sx={{my: 1.5, width: '92%'}}
                  >
                    <MenuItem value="" disabled>
                      Select an option
                    </MenuItem>
                    <MenuItem value="man">Man</MenuItem>
                    <MenuItem value="woman">Woman</MenuItem>
                    <MenuItem value="non_binary">Non-binary</MenuItem>
                    <MenuItem value="transgender">Transgender</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                    <MenuItem value="prefer_not_to_say">Prefer not to say</MenuItem>
                  </Select>
                </FormControl>
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

export default ClientForm