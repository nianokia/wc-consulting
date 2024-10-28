import React from "react";

/* ------ PURPOSE ------
  Display each entry with details. Allow admin to delete an entry.
*/

const Entry = ({ entry, handleDelete }) => {
  // --- send selected entry to parent's handleDelete function ---
  const onDelete = (selectedEntry) => {
    handleDelete(selectedEntry);
  }
  return (
    <div className="Entry">
      <h3>{entry.first_name} {entry.last_name}</h3>
      <p>{entry.email}</p>
      <p>{entry.comment}</p>
      <p>{entry.created_at}</p>
      {/* --- delete selected entry on click --- */}
      <button onClick={() => {onDelete(entry)}}>🗑️</button>
    </div>
  )
};

export default Entry;