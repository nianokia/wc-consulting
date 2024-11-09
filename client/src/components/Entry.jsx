import React from "react";
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


/* ------ PURPOSE ------
  Display each entry with details. Allow admin to delete an entry.
*/

const Entry = ({ entry, handleDelete }) => {
  // --- send selected entry to parent's handleDelete function ---
  const onDelete = (selectedEntry) => {
    handleDelete(selectedEntry);
  }

  const formatDate = (createdAtDate) => {
    const date = dayjs(createdAtDate).format("MMM D, YYYY h:mm A");
    return date;
  }

  return (
    <>
    {entry.client_entry_id ? (
      <Card variant="outlined" sx={{ maxWidth: 760, my: 1 }} style={{border: "3px solid #70A288"}}>
        <Stack direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <CardHeader title={`${entry.first_name} ${entry.last_name}`} subheader={entry.email} />
          <Typography gutterBottom variant="body1" sx={{mx: '15px'}}>
            {formatDate(entry.created_at)}
          </Typography>
        </Stack>
        <Box sx={{ px: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Type of Therapy: {entry.type}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Age: {entry.age}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Race: {entry.race}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Gender: {entry.gender}
            </Typography>
          </Box>
          <Typography variant="body3" sx>
            {entry.comment ? <p>{entry.comment}</p> : null}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mx: '20px' }}>
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Issues
            </Typography>
            <Stack direction="row" spacing={1}>
              {entry.issues.split(',').map((issue) => {
                const cleanedIssue = issue.replace(/['"]+/g, '').replace(/[{}]+/g, '');
                return <Chip key={cleanedIssue} label={cleanedIssue} size="small" />;
              })}
            </Stack>
          </Box>
          <IconButton aria-label="delete" onClick={() => onDelete(entry)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Card>
    ) : (
      <Card variant="outlined" sx={{ maxWidth: 760, my: 1 }} style={{border: "3px solid #DAB785"}}>
        <Stack direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <CardHeader title={`${entry.first_name} ${entry.last_name}`} subheader={entry.email} />
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
          <Typography variant="body3" sx>
            {entry.comment ? <p>{entry.comment}</p> : null}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mx: '20px', p: 2 }}>
          <IconButton aria-label="delete" onClick={() => onDelete(entry)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Card>
    )}      
    </>
  )
};

export default Entry;