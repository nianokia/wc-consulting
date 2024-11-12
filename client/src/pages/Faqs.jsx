import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Container, Box, Typography, Button, List, ListItem, ListItemIcon, Link } from '@mui/material';
import { PlayArrow } from "@mui/icons-material";

// --- custom MUI components ---
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.lightest,
  backgroundColor: theme.palette.secondary.main,
  border: '1px dotted theme.palette.secondary.darkest',
  '&:hover': {
    backgroundColor: theme.palette.secondary.lighter,
    color: theme.palette.tertiary.darkest
  },
  borderRadius: 8
}))

/* ------ PURPOSE ------
  Displays list of FAQs with a table of contents that jumps to that specific question on the page
*/

const Faqs = () => {
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
      <hr />

      <Box id='faqContent' sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMidSize ? '20px' : '65px',
        m: '30px auto'
      }}>
        <Box id='tableOfContents' sx={{ width: isMobile ? '100%' : '33%', ml: isMidSize ? 0 : 2}}>
          <Typography variant='h1' sx={{
            fontSize: isMobile ? '30px' : isMidSize ? '30px' : '45px',
            mt: isMobile ? 0 : 2,
            mb: 2,
            ml: isMobile ? 2 : 1
          }}>
            FAQS
          </Typography>
          <Box sx={{ backgroundColor: 'accent.light', py: 1.5, justifyItems: 'center' }}>
            <Typography variant='h3' sx={{
              fontSize: isMobile ? '18px' : '22px',
              px: isMidSize ? 2 : 3,
              pt: isMidSize ? 1 : 2,
              justifySelf: 'start'
            }}>
              Questions
            </Typography>
            <List sx={{ listStyle: 'none', pl: '0' }}>
              {/* Jumps to the specific question on the page onclick */}
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q1' sx={{ color: 'secondary.main' }}>
                  What is mental health counseling?
                </Link>
              </ListItem>
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q2' sx={{ color: 'secondary.main' }}>
                  Who can benefit from mental health counseling?
                </Link>
              </ListItem>
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q3' sx={{ color: 'secondary.main' }}
                  >How does mental health counseling work?
                </Link>
              </ListItem>
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q4' sx={{ color: 'secondary.main' }}>
                  How long does mental health counseling take?
                </Link>
              </ListItem>
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q5' sx={{ color: 'secondary.main' }}>
                  Is mental health counseling confidential?
                </Link>
              </ListItem>
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q6' sx={{ color: 'secondary.main' }}>
                  What should I look for in a mental health counselor?
                </Link>
              </ListItem>
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q7' sx={{ color: 'secondary.main' }}>
                  How do I know if mental health counseling is right for me?
                </Link>
              </ListItem>
              <ListItem sx={{ marginBottom: '8px' }}>
                <Link href='#q8' sx={{ color: 'secondary.main' }}>
                Additional Resources</Link>
              </ListItem>
            </List>
            {/* ------ CONTACT BUTTON ------ */}
            {isMobile ? (
                null
              ) : (
                <StyledButton onClick={() => navigate('/contact')} sx={{ mb: 2 }}>
                  Contact
                </StyledButton>
              )
            }
          </Box>
        </Box>

        <Box className="faq-col" style={{ width: isMobile ? '100%' : '66%', justifyItems: 'end' }}>
          <article>
            <Box className="faq-qa" id="q1" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                What is mental health counseling?
              </Typography>
              <Typography variant="body1">
                Mental health counseling, also known as psychotherapy or talk therapy, is a collaborative process between a trained mental health professional and an individual seeking support for their emotional, psychological, or behavioral well-being. It involves open communication, active listening, and the development of coping strategies and skills to address a range of mental health concerns.
              </Typography>
            </Box>
            <Box className="faq-qa" id="q2" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                Who can benefit from mental health counseling?
              </Typography>
              <Typography variant="body1">
                Anyone can benefit from mental health counseling, regardless of age, background, or life circumstances.
              </Typography>
            </Box>
            <Box className="faq-qa" id="q3" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                How does mental health counseling work?
              </Typography>
              <Typography variant="body1">
                The counseling process typically involves regular sessions with a therapist. During these sessions, you'll have the opportunity to discuss your thoughts, feelings, and experiences in a safe and supportive environment. Your therapist will listen attentively, ask questions, and offer guidance and feedback. Together, you'll work towards identifying and addressing the underlying causes of your concerns and develop strategies to improve your overall well-being.
              </Typography>
            </Box>
            <Box className="faq-qa" id="q4" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                How long does mental health counseling take?
              </Typography>
              <Typography variant="body1">
                The duration of mental health counseling varies depending on individual needs and goals. Some individuals may benefit from short-term counseling, while others may require longer-term therapy. The frequency of sessions can also vary, with some individuals meeting weekly, bi-weekly, or monthly.
              </Typography>
            </Box>
            <Box className="faq-qa" id="q5" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                Is mental health counseling confidential?
              </Typography>
              <Typography variant="body1">
                Yes, mental health counseling is generally confidential. I am legally and ethically bound to keep your information private, except in specific circumstances, such as: disclosure of children, vulnerable adults or animals being physically, emotionally, sexually, emotionally, financially abused or neglected. Also, a duty to warn the general community if you make threats of harm that I deem credible.  
              </Typography>
            </Box>
            <Box className="faq-qa" id="q6" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                What should I look for in a mental health counselor?
              </Typography>
              <Typography variant="body1">
                When choosing a counselor, consider the following:
              </Typography>
              <List sx={{ 
                listStyleType: 'none',
                '& li': {
                  paddingLeft: isMobile ? '10px' : '16px',
                  position: 'relative',
                }
              }}>
                <ListItem key='faqQ6Item1'>
                  <ListItemIcon key='optionIcon1'>
                    <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                  </ListItemIcon>
                  Credentials: Ensure your therapist is licensed and qualified in their field.
                </ListItem>
                <ListItem key='faqQ6Item2'>
                  <ListItemIcon key='optionIcon2'>
                    <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                  </ListItemIcon>
                  Experience: Look for a therapist with experience in addressing your specific concerns.
                </ListItem>
                <ListItem key='faqQ6Item3'>
                  <ListItemIcon key='optionIcon3'>
                    <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                  </ListItemIcon>
                  Rapport: Choose a therapist with whom you feel comfortable, it's a good fit and you can establish a trusting relationship.
                </ListItem>
                <ListItem key='faqQ6Item4'>
                  <ListItemIcon key='optionIcon4'>
                    <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                  </ListItemIcon>
                  Approach: Consider whether you prefer a particular therapeutic approach, such as cognitive-behavioral therapy (CBT), psychodynamic therapy, or solution focus brief  therapy.
                </ListItem>
              </List>
            </Box>
            <Box className="faq-qa" id="q7" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                How do I know if mental health counseling is right for me?
              </Typography>
              <Typography variant="body1">
                If you're struggling with your mental health, feeling overwhelmed, or experiencing persistent negative emotions, mental health counseling may be a valuable option. It's important to remember that seeking help is a sign of strength, not weakness.
              </Typography>
            </Box>
            <Box className="faq-qa" id="q8" sx={{ my: 3 }} >
              <Typography variant='h5' sx={{ mb: 1.25 }}>
                Additional Resources:
              </Typography>
              <Typography variant="body1">
                <List sx={{
                  listStyleType: 'none',
                  '& li': {
                    paddingLeft: isMobile ? '10px' : '16px',
                    position: 'relative',
                  }
                }}>
                  <ListItem key='faqQ8Item1'>
                    <ListItemIcon key='optionIcon1'>
                      <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                    </ListItemIcon>
                    <Link href="https://www.nami.org/" target="_blank" rel='noreferrer' sx={{
                      color: 'secondary.main'
                    }}>
                      National Alliance on Mental Illness (NAMI)
                    </Link>
                  </ListItem>
                  <ListItem key='faqQ8Item2'>
                     <ListItemIcon key='optionIcon1'>
                      <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                    </ListItemIcon>
                    <Link href="https://store.samhsa.gov/" target="_blank" rel='noreferrer' sx={{
                      color: 'secondary.main'
                    }}>
                      MentalHealth.gov
                    </Link>
                  </ListItem>
                  <ListItem key='faqQ8Item3'>
                     <ListItemIcon key='optionIcon1'>
                      <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                    </ListItemIcon>
                    Crisis Text Line: Text HOME to 741741
                  </ListItem>
                  <ListItem key='faqQ8Item4'>
                     <ListItemIcon key='optionIcon1'>
                      <PlayArrow sx={{ color: 'primary.main', fontSize: '32px' }} />
                    </ListItemIcon>
                    988 Suicide & Crisis Lifeline: Call or text 988
                  </ListItem>
                </List>
              </Typography>
            </Box>
          </article>
          {isMobile ? (
                <StyledButton onClick={() => navigate('/contact')}>
                  Contact
                </StyledButton>
              ) : (
                null
              )
            }
        </Box>
      </Box>
      
      <Footer />
    </Container>
  )
}

export default Faqs