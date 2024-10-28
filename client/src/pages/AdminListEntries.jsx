import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Entry from "../components/Entry";
import { useAuth0 } from "@auth0/auth0-react";

/* ------ PURPOSE ------
  Displays list of all entries and allows admin to filter results and delete entries 
  (admin expressed that they will not likely use the delete feature as they want to analyze the data)
*/

const AdminListEntries = () => {
  const [entries, setEntries] = useState([]);

  // --- state the method the app wants to use from the useAuth0 hook ---
  const { logout } = useAuth0();
  
  // --- create variable to debug fetch request ---
  var responseClone;

  // --- fetch all the client entries and update its corresponding state ---
  const loadEntries = async () => {
    // put both GET list routes into an array
    const tableRoutes = [`${process.env.DOMAIN}/api/client-list`, `${process.env.DOMAIN}/api/professional-list`];

    // Use map to fetch data from each table
    const requests = tableRoutes.map((tableRoute) =>
      fetch(tableRoute)
        .then((response) => {
          // --- clone response so that we can reuse gathered data ---
          responseClone = response.clone();
          return response.json();
        })
        .catch((err) => {
          // --- log the error received and the response.json ---
          console.error("Error parsing JSON from response: ", err, responseClone);
          // --- gather raw text from response ---
          const bodyText = responseClone.text();
          // --- log the raw text response ---
          console.log('Received the following instead of valid JSON:', bodyText);
        })
    )

    // --- wait for all promised to load then return a single promise ---
    const results = await Promise.all(requests);

    // --- concatenate both of the arrays in results into a single array ---
    const combinedResults = results.flat();

    // --- set entries state to the combined single array of all the fetched data ---
    setEntries(combinedResults);
  }

  // --- monitors changes to entries and reruns loadEntries ---
  useEffect(() => {
    loadEntries();
  }, []);

  const handleDelete = async (entry) => {
    // --- check if entry is a client or professional then fetch the corresponding DELETE request ---
    if (entry.client_entry_id) {
      const response = await fetch(`${process.env.DOMAIN}/api/client-list/${entry.client_entry_id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        loadEntries();
      } else {
        console.error("Error", response.statusText)
      }
    } else {
      const response = await fetch(`${process.env.DOMAIN}/api/professional-list/${entry.professional_entry_id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        loadEntries();
      }else {
        console.error("Error", response.statusText)
      }
    }
    
    console.log("Deleted the entry!");
  };

  // --- specify returnTo URL to origin (Home.jsx) ---
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin  } });
  };

  return (
    <div className="AdminList">
      <h1>Admin List Entries</h1>
      <ul style={{ listStyle: "none" }}>
        {/* parameter i = unique index */}
        {entries.map((entry, i) => {
          return (
            <li key={i}>
              <Entry entry={entry} handleDelete={handleDelete} />
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
    </div>
  )
}

export default AdminListEntries