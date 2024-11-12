import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Container, Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { PlayArrow } from '@mui/icons-material';

// --- custom MUI components ---
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.accent.darker,
  backgroundColor: theme.palette.accent.light,
  border: '1px dotted theme.palette.tertiary.darkest',
  '&:hover': {
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.tertiary.darkest
  },
  borderRadius: 8,
}))

/* ------ PURPOSE ------
  Details what a client can expect at their first session.
*/

const FirstSession = () => {
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
      <Hero title="First Session" image='../walkbridge.png' />

      <Box id="first-session-details" sx={{ mb: 1 }}>

        {/* ------ EXPLANATION SECTION ------ */}
        <Typography variant='body1' sx={{ my: 2.5, fontSize: isMobile ? '15px' : '17px' }}>
          Your first session, will start out with you filling out consent paperwork that will take no longer than five to ten minutes. Often referred to as an intake session, is an opportunity for you and your therapist to get to know each other and establish a comfortable working relationship.
        </Typography>
        <Typography variant='body1' sx={{ my: 2.5, fontSize: isMobile ? '15px' : '17px' }}>
          I normally refer to the first session as an interview.  You are interviewing me to make sure I have the skill set to bring value to your situation and would I be a good fit for you.  I am interviewing you to assess if I have the skill set / training to bring value to your problem.  
        </Typography>
        <Typography variant='body1' sx={{ my: 2.5, fontSize: isMobile ? '15px' : '17px' }}>
          I will then review how long sessions last 53 minutes, therapy rate $150 per session, benefits and risks to counseling, confidentiality, being a mandated reported, how I handle suicidal / homicidal ideations, your role in therapy and my role in therapy. You will share your story on what brings you to therapy.
        </Typography>
        <Typography variant='body1' sx={{ my: 2.5, fontSize: isMobile ? '15px' : '17px' }}>
          At the end of the first session I will offer your three options:
        </Typography>

        {/* ------ LIST SECTION ------ */}
        <List sx={{
          listStyleType: 'none',
          '& li': {
            paddingLeft: isMobile ? '10px' : '24px',
            position: 'relative',
          },
        }}>
          {/* ------ 1ST LIST ITEM ------ */}
          <ListItem key='option1'>
            <ListItemIcon key='optionIcon1'>
              <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
            </ListItemIcon>
            <ListItemText 
              key='optionText1' 
              primary='Option #1:  Sign me up for another session, you are a good fit for me.'
              sx={{ fontSize: isMobile ? '34px' : '26px' }} />
          </ListItem>
          {/* ------ 2ND LIST ITEM ------ */}
          <ListItem key='option2'>
            <ListItemIcon key='optionIcon2'>
              <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
            </ListItemIcon>
            <ListItemText
              key='optionText2'
              primary='Option #2:  Let me think about this and I will text you back in a couple of days with a yes or a no to therapy.'
              sx={{ fontSize: isMobile ? '34px' : '26px' }} />
          </ListItem>
          {/* ------ 3RD LIST ITEM ------ */}
          <ListItem key='option3'>
            <ListItemIcon key='optionIcon3'>
              <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
            </ListItemIcon>
            <ListItemText
              key='optionText3'
              primary='Option #3: Thanks but no thanks Greg. I will continue to search for another therapist.  Your therapist will likely ask you about your concerns, your history, and your goals for counseling. They may also discuss confidentiality, fees, and the therapy approach they use.'
              sx={{ fontSize: isMobile ? '34px' : '26px' }} />
          </ListItem>
        </List>
      </Box>
      {/* ------ FAQS BUTTON ------ */}
      <StyledButton sx={{ float: 'right', width: isMobile ? '30%' : '20%' }} onClick={() => navigate('/faqs')}>
        FAQs
      </StyledButton>
      <br /><br />

      <Footer />
    </Container>
  )
}

export default FirstSession