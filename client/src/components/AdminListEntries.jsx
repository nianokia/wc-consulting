import React, { useState } from "react";

const AdminListEntries = () => {
  const [client_entries, setClient_Entries] = useState([]);

  const loadEntries = () => {
    fetch('http://localhost:4545/list')
      .then((response) => response.json())
  }

  return (
    <>
      <h1>Admin List Entries</h1>
    </>
  )
}

export default AdminListEntries