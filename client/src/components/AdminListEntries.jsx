import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

// PURPOSE - Displays list of all entries and allows admin to filter results and delete entries 
// (admin expressed not likely using this feature as he wants to analyze the data)

const AdminListEntries = () => {
  const [client_entries, setClient_Entries] = useState([]);

  const { logout } = useAuth0();
  
  // fetch all the client entries and update its corresponding state
  const loadClientEntries = () => {
    fetch('http://localhost:4545/list')
      .then((response) => response.json())
      .then((client_entries) => {
        setClient_Entries(client_entries);
      })
  }

  // monitor changes to the client_entries and reruns the function
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
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin  } })}>
        Log Out
      </button>
    </>
  )
}

export default AdminListEntries