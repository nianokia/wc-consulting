import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminListEntries = () => {
  const [client_entries, setClient_Entries] = useState([]);

  // load all th
  const loadClientEntries = () => {
    fetch('http://localhost:4545/list')
      .then((response) => response.json())
      .then((client_entries) => {
        setClient_Entries(client_entries);
      })
  }

  useEffect(() => {
    loadClientEntries();
  }, []);

  return (
    <>
      <h1>Admin List Entries</h1>
      <ul>
        {client_entries.map((client_entry) => {
          return (
            <li key={client_entry.client_entries_id}>
              {client_entry.first_name} {client_entry.last_name}
            </li>
          )
        })}
      </ul>
      <hr />
      <Link to='/'>Home</Link>
      <br />
      <Link to='/login'>Log Out</Link>
    </>
  )
}

export default AdminListEntries