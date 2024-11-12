import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// ------ MUI IMPORTS ------
import { useMediaQuery, Box, Typography, ButtonGroup, Button, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

/* ------ PURPOSE ------
  Display a header at the top of every page with the business name and logo and a navbar of the company
  - a reusable component thas called in many components while being editted in one component (normalizes code)
*/

const Header = () => {
  const navigate = useNavigate();

  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 1024px)');

  // --- MUI navBar collapse ---
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const pages = [
    {title: 'About', link: '/about'},
    {title: 'Services', link: '/services'},
    {title: 'Rates', link: '/rates-and-insurance'},
    {title: 'FAQs', link: '/faqs'},
    {title: 'First Session', link: '/first-session'},
    {title: 'Contact', link: '/contact'}
  ];

  return (
    <Box id='Header' sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1024 : 1600,
      minWidth: isMobile ? 350 : isMidSize ? 500 : 1600,
      width: '97%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      m: '0 auto'
    }}>
      <Box onClick={() => navigate('/')} sx={{display: 'flex', alignItems: 'center' }}>
        <img src='../logo-transparent.png' alt='Wright Choice Consulting logo' style={{ width: isMobile ? '50px' : isMidSize ? '63px' : '75px' }} />
        <Box sx={{
          display: isMobile ? 'block' : 'flex',
          flexDirection: 'column'
        }}>
          <Typography variant='h4' sx={{
            display: 'block',
            mt: 0.5, ml: 1, mb: 0,
            fontFamily: 'merriweather.font',
            fontSize: isMobile ? '16px' : isMidSize ? '18px' : '20px',
            color: 'secondary.darker'
          }}
          >
            <strong>Wright Choice Consulting</strong>
          </Typography>
          <Typography variant='h6' sx={{
            display: isMobile ? 'none' : 'block',
            ml: 1,
            fontFamily: 'merriweather.font', 
            fontSize: isMidSize ? '16px' : '18px',
            color: 'secondary.darker'
          }}>
            Psychotherapy
          </Typography>
        </Box>
      </Box>
      <nav className='Navbar' position='static' sx={{
        display: 'flex',
        gap: '1',
        color: 'secondary.main'
      }}>
        {isMidSize ? (
          <Box>
            <IconButton
              size="large"
              aria-label="collapsed site navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: isMobile ? 'block' : isMidSize ? 'block' : 'none' }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.link);
                }}>
                  <Typography sx={{ textAlign: 'center', fontFamily: 'jakarta.font' }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <ButtonGroup variant='text' aria-label='text button group' sx={{ color: 'secondary.main' }}>
            {pages.map((page) => (
              <Button onClick={() => navigate(page.link)} sx={{ color: 'secondary.main', fontFamily: 'jakarta.font', fontSize: isMidSize ? '14px' : '16px' }}>
                {page.title}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </nav>
    </Box>
  )
}

export default Header