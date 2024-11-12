import React from "react";
import dayjs from 'dayjs';
import { issueMapping, raceMapping, genderMapping, capitalizeFirstLetter } from "../constants.jsx";

// ------ MUI IMPORTS ------
import { styled, useMediaQuery, Container, Card, CardHeader, Box, Chip, Stack, Divider, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

/* ------ PURPOSE ------
  Display each entry with details. Allow admin to delete an entry.
*/

const ClientCard = styled(Card)(({ theme }) => ({
  color: theme.palette.primary.darkest,
  backgroundColor: theme.palette.primary.lightest,
  '&:hover': {
    backgroundColor: theme.palette.primary.lighter,
    color: theme.palette.primary.contrastText
  },
  borderRadius: 8,
  border: `1px dotted ${theme.palette.primary.main}`,
  margin: '10px auto',
}));

const ProfessionalCard = styled(Card)(({ theme }) => ({
  color: theme.palette.secondary.darkest,
  backgroundColor: theme.palette.secondary.lightest,
  '&:hover': {
    backgroundColor: theme.palette.secondary.lighter,
    color: theme.palette.secondary.darker
  },
  borderRadius: 8,
  border: `1px dotted ${theme.palette.secondary.light}`,
  margin: '10px auto'
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.lightest,
  margin: '4px'
}))

const Entry = ({ entry, handleDelete }) => {
  // --- MUI responsive breakpoints ---
  const isMobile = useMediaQuery('(max-width: 450px)');
  const isMidSize = useMediaQuery('(max-width: 1024px)');

  // --- send selected entry to parent's handleDelete function ---
  const onDelete = (selectedEntry) => {
    handleDelete(selectedEntry);
  }

  const formatDate = (createdAtDate) => {
    const date = dayjs(createdAtDate).format("MMM D, YYYY h:mm A");
    return date;
  }

  const capitalizedFName = capitalizeFirstLetter(entry.first_name);
  const capitalizedLName = capitalizeFirstLetter(entry.last_name);
  
  return (
    <Container sx={{
      maxWidth: isMobile ? 400 : isMidSize ? 1024 : 1665,
      minWidth: isMobile ? 350 : isMidSize ? 500 : 1200,
    }}>
    {entry.client_entry_id ? (
      //  ------ CLIENT ENTRY ------
      <ClientCard variant="outlined" sx={{ maxWidth: isMobile ? 350 : isMidSize ? 700 : 1200 }}>
        <Stack direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <CardHeader title={`${capitalizedFName} ${capitalizedLName}`} subheader={entry.email} />
          <Typography gutterBottom variant="body1" sx={{mx: '15px'}}>
            {formatDate(entry.created_at)}
          </Typography>
        </Stack>
        <Box sx={{ px: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'none' : 'space-between', flexDirection: isMobile ? 'column' : 'row' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Therapy: {capitalizeFirstLetter(entry.type)}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Age: {entry.age}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Race: {raceMapping[entry.race]}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Gender: {genderMapping[entry.gender]}
            </Typography>
          </Box>
          <Typography variant="body3">
            {entry.comment ? <p>{entry.comment}</p> : null}
          </Typography>
        </Box>
        <Divider variant="middle" sx={{mt: '12px'}} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mx: '20px' }}>
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Issues
            </Typography>
            <Stack direction={isMobile ? 'column' : 'row'} spacing={1}>
              {entry.issues.split(',').map((issue) => {
                const cleanedIssue = issue.replace(/['"]+/g, '').replace(/[{}]+/g, '');
                return (
                  <StyledChip 
                    key={cleanedIssue}
                    label={issueMapping[cleanedIssue]}
                    size="small"
                    sx={{
                      margin: isMobile ? '4px 0' : '4px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
          <IconButton aria-label="delete" onClick={() => onDelete(entry)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </ClientCard>
    ) : (
      //  ------ PROFESSIONAL ENTRY ------ 
      <ProfessionalCard variant="outlined" sx={{ maxWidth: isMobile ? 350 : isMidSize ? 700 : 1200 }}>
        <Stack direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <CardHeader title={`${capitalizedFName} ${capitalizedLName}`} subheader={entry.email} />
          <Typography gutterBottom variant="body1" sx={{mx: '15px'}}>
            {formatDate(entry.created_at)}
          </Typography>
        </Stack>
        <Box sx={{ px: 2.5, py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body3">
              Phone: {entry.phone}
            </Typography>
          </Box>
          <Typography variant="body3">
            {entry.comment ? <p>{entry.comment}</p> : null}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mx: '20px', p: 2 }}>
          <IconButton aria-label="delete" onClick={() => onDelete(entry)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </ProfessionalCard>
    )}      
    </Container>
  )
};

export default Entry;