import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

// PURPOSE - Displays list of all entries and allows admin to filter results and delete entries 
// (admin expressed not likely using this feature as he wants to analyze the data)

const AdminListEntries = () => {
  const [client_entries, setClient_Entries] = useState([]);

  const { logout } = useAuth0();
  
  // create variable to debug fetch request
  var responseClone;

  // fetch all the client entries and update its corresponding state
  const loadClientEntries = () => {
    fetch(`${process.env.DOMAIN}/list`)
      .then((response) => {
        // clone response so that we can reuse gathered data
        responseClone = response.clone();
        return response.json();
      })
      .then((client_entries) => {
        console.log({client_entries});
        setClient_Entries(client_entries);
      }, (rejectionReason) => {
        // log the error received and the response.json
        console.log('Error parsing JSON from response: ', rejectionReason, responseClone);
        // gather raw text from response
        responseClone.text()
        .then((bodyText) => {
          // log the raw text response
          console.log('Received the following instead of valid JSON:', bodyText);
        });
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
        {/* parameter i = unique index */}
        {client_entries.map((client_entry, i) => {
          return (
            <li key={i}>
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