import React from "react";
import moment from 'moment';

/* ------ PURPOSE ------
  Display each entry with details. Allow admin to delete an entry.
*/

const Entry = ({ entry, handleDelete }) => {
  // --- send selected entry to parent's handleDelete function ---
  const onDelete = (selectedEntry) => {
    handleDelete(selectedEntry);
  }

  const formatDate = (createdAtDate) => {
    const date = moment(createdAtDate).format("MMM D, YYYY h:mm a");
    return date;
  }

  return (
    <>
      {entry.client_entry_id ? (
        <div className="Entry">
          <h3>{entry.first_name} {entry.last_name}</h3>
          <p>{entry.email}</p>
          <p>{entry.type}</p>
          <p>{entry.issues}</p>
          <p>{entry.age}</p>
          <p>{entry.race}</p>
          <p>{entry.gender}</p>
          {entry.comment ? <p>{entry.comment}</p> : null}
          {/* <p>{entry.comment}</p> */}
          <p>{formatDate(entry.created_at)}</p>
          {/* --- delete selected entry on click --- */}
          <button onClick={() => {onDelete(entry)}}>🗑️</button>
        </div>
      ) : (
        <div className="Entry">
          <h3>{entry.first_name} {entry.last_name}</h3>
          <p>{entry.phone}</p>
          <p>{entry.email}</p>
          <p>{entry.comment}</p>
          <p>{formatDate(entry.created_at)}</p>
          {/* --- delete selected entry on click --- */}
          <button onClick={() => {onDelete(entry)}}>🗑️</button>
        </div>
      )}
      
    </>
  )
};

export default Entry;