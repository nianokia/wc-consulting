import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
  const isMidSize = useMediaQuery('(max-width: 760px)');

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
   <Box className='Header' sx={{ maxWidth: isMobile ? 400 : isMidSize ? 760 : 1200, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center' }}>
        <img src='../logo-transparent.png' alt='Wright Choice Consulting logo' style={{width: '50px'}} />
        <Box sx={{ display: isMobile ? 'block' : 'flex', flexDirection: 'column' }}>
          <Typography variant='h4' sx={{ display: isMobile ? 'block' : 'block', mt: '5px', ml: 1, mb: 0, fontSize: isMobile ? '16px' : '18px', color: 'secondary.darker' }}
          >
            Wright Choice Consulting
          </Typography>
          <Typography variant='h6' sx={{ display: isMobile ? 'none' : 'block', ml: 1, fontSize: '16px', color: 'secondary.darker' }}>
            Family Therapy
          </Typography>
        </Box>
      </Box>
     <nav className='Navbar' position='static' sx={{display: 'flex', gap: '1', color: 'secondary.main'}}>
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
            sx={{ display: isMobile ? 'block' : 'none' }}
          >
            {pages.map((page) => (
              <MenuItem key={page.title} onClick={() => {
                handleCloseNavMenu();
                navigate(page.link);
              }}>
                <Typography sx={{ textAlign: 'center' }}>{page.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        <ButtonGroup variant='text' aria-label='text button group' sx={{ color: 'secondary.main' }}>
          {pages.map((page) => (
            <Button onClick={() => navigate(page.link)} sx={{ color: 'secondary.main' }}>
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