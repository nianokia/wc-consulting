import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

/* ------ PURPOSE ------
  Displays list of all entries and allows admin to filter results and delete entries 
  (admin expressed that they will not likely use the delete feature as they want to analyze the data)
*/

const AdminListEntries = () => {
  const [client_entries, setClient_Entries] = useState([]);

  // --- state the method the app wants to use from the useAuth0 hook ---
  const { logout } = useAuth0();
  
  // --- create variable to debug fetch request ---
  var responseClone;

  // --- fetch all the client entries and update its corresponding state ---
  const loadClientEntries = () => {
    fetch(`${process.env.DOMAIN}/api/list`)
      .then((response) => {
        // --- clone response so that we can reuse gathered data ---
        responseClone = response.clone();
        return response.json();

      })
      .then((client_entries) => {
        setClient_Entries(client_entries);

      }, (rejectionReason) => {
        // --- log the error received and the response.json ---
        console.log('Error parsing JSON from response: ', rejectionReason, responseClone);
        // --- gather raw text from response ---
        responseClone.text()
        
        .then((bodyText) => {
          // --- log the raw text response ---
          console.log('Received the following instead of valid JSON:', bodyText);
          
        });
      })
  }

  // --- monitors changes to client_entries and reruns loadClientEntries ---
  useEffect(() => {
    loadClientEntries();
  }, []);

  // --- specify returnTo URL to origin (Home.jsx) ---
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin  } });
  };

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
      <div className="logoutButton" style={{display: "flex", justifyContent: "flex-end"}}>
        <button onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <Footer />
    </>
  )
}

export default AdminListEntries