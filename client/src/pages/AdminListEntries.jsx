import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Entry from '../components/Entry';
import { useAuth0 } from '@auth0/auth0-react';
import ToggleButton from '@mui/material/ToggleButton';

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Container, Typography, Button } from '@mui/material';

/* ------ PURPOSE ------
  Displays list of all entries and allows admin to filter results and delete entries 
  (admin expressed that they will not likely use the delete feature as they want to analyze the data)
*/

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  margin: theme.spacing(0.5),
  border: `1 dotted ${theme.palette.background.darker}`,
  borderRadius: 8,
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  borderRadius: 8
}))

const AdminListEntries = () => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 760px)');
  const [entries, setEntries] = useState([]);
  // --- monitors whether handleDelete was called and returns true or false ---
  const [isDeletingEntry, setIsDeletingEntry] = useState(false);

  // --- set what the list will sort by ---
  const [sort, setSort] = useState('newest');
  const [sortDirection, setSortDirection] = useState(true);
  const [selected, setSelected] = useState(false);

  // --- state the method the app wants to use from the useAuth0 hook ---
  const { logout } = useAuth0();

  // --- fetch all entries from both client & professional tables and combine the results into one array ---
  const loadEntries = async () => {
    // put both GET list routes into an array
    const tableRoutes = [`${process.env.DOMAIN}/api/client-list`, `${process.env.DOMAIN}/api/professional-list`];

    // Use map to fetch data from each table
    const requests = tableRoutes.map((tableRoute) =>
      fetch(tableRoute)
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.error('Error parsing JSON from tableRoutes response: ', err);
        })
    )

    // --- wait for all promised to load then return a single promise ---
    const results = await Promise.all(requests);

    // --- concatenate both of the arrays in results into a single array ---
    const combinedResults = results.flat();
    return combinedResults;
  }
  
  const handleDelete = async (entry) => {
    // --- update isDeletingEntry to true since the function is deleting an entry ---
    setIsDeletingEntry(true);

    // --- check if entry is a client or professional then fetch the corresponding DELETE request ---
    if (entry.client_entry_id) { 
      const response = await fetch(`${process.env.DOMAIN}/api/client-list/${entry.client_entry_id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        console.error('Error', response.statusText)
      } 
    } else {
      const response = await fetch(`${process.env.DOMAIN}/api/professional-list/${entry.professional_entry_id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        console.error('Error', response.statusText)
      } 
    }
    
    // --- update isDeleting to false since function is finished deleting the entry ---
    setIsDeletingEntry(false);

    // --- fetch entries ---
    const newEntries = await loadEntries();
    // --- sort fetched entries ---
    const sortedEntries = newEntries.sort((a,b) => {
      let dateA = new Date(a.created_at);
      let dateB = new Date(b.created_at);
      return sortDirection ? dateA - dateB : dateB - dateA;
    });
    
    setEntries(sortedEntries);

    // --- toggle sort to switch back and forth when called ---
    setSort(sort === 'newest' ? 'newest' : 'oldest');
    setSortDirection(!sortDirection);

    console.log('Deleted the entry!');
  };

  const handleSort = async () => {
    // --- copy entries array ---
    let sortedEntries = [...entries];

    // --- sort entries from newest or oldest ---
    if (sort === 'newest') {
      sortedEntries.sort((a,b) => {
        let dateA = new Date(a.created_at);
        let dateB = new Date(b.created_at);
        return sortDirection ? dateB - dateA : dateA - dateB;
      });
    } else if (sort === 'oldest') {
      sortedEntries.sort((a,b) => {
        let dateA = new Date(a.created_at);
        let dateB = new Date(b.created_at);
        return sortDirection ? dateA - dateB : dateB - dateA;
      });
    }
    
    console.log('Sorted Entries: ', sortedEntries);
    setEntries(sortedEntries);

    // --- toggle sort to switch back and forth when called ---
    setSort(sort === 'newest' ? 'newest' : 'oldest');
    setSortDirection(!sortDirection);
  };

  // --- monitors changes to isDeletingEntry and reruns loadEntries when entry is deleted ---
  // --- call an async function to fetch response from loadEntries and then setEntries to its value ---
  useEffect(() => {
    async function getFinalEntries() {
      const finalEntries = await loadEntries();
      setEntries(finalEntries);
    }
    getFinalEntries();
  }, []);

  // --- specify returnTo URL to origin (Home.jsx) ---
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin  } });
  };

  return (
    <Container id='AdminListEntries' sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1200 : 1400,
      minWidth: isMobile ? 350 : isMidSize ? 760 : 1400, 
      width: '100%', 
    }}>
      <Typography variant='h1' sx={{ my: '20px', fontSize: isMobile ? '36px' : isMidSize ? '48px' : '64px' }}>
        Admin List Entries
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div id='logoutButton' style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <LogoutButton variant='contained' onClick={handleLogout}>
              Log Out
            </LogoutButton>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <h6>Sort by Date:</h6>
          <StyledToggleButton
            value='check'
            selected={selected}
            size='small'
            onChange={() => setSelected((prevSelected) => !prevSelected)}
            onClick={handleSort}
          >
            Newest
          </StyledToggleButton>
        </div>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        {/* parameter i = unique index */}
        {entries.map((entry, i) => {
          return (
            <li key={i}>
              <Entry entry={entry} handleDelete={handleDelete} />
            </li>
          )
        })}
      </ul>

      <div className='logoutButton' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <LogoutButton variant='contained' onClick={handleLogout}>
          Log Out
        </LogoutButton>
      </div>
      <Footer />
    </Container>
  )
}

export default AdminListEntries