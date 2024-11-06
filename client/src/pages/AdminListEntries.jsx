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
  // --- monitors whether handleDelete was called and returns true or false ---
  const [isDeletingEntry, setIsDeletingEntry] = useState(false);

  // --- state the method the app wants to use from the useAuth0 hook ---
  const { logout } = useAuth0();

  // --- fetch all entries from both client & professional tables and combine the results into one array ---
  const loadEntries = async () => {
    // put both GET list routes into an array
    const tableRoutes = [`${process.env.DOMAIN}/api/client-list`, `${process.env.DOMAIN}/api/professional-list`];

    // Use map to fetch data from each table
    const requests = tableRoutes.map((tableRoute) =>
      fetch(tableRoute)
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.error("Error parsing JSON from tableRouts response: ", err);
        })
    )

    // --- wait for all promised to load then return a single promise ---
    const results = await Promise.all(requests);

    // --- concatenate both of the arrays in results into a single array ---
    const combinedResults = results.flat();
    return combinedResults;
  }

  // --- monitors changes to isDeletingEntry and reruns loadEntries when entry is deleted ---
  // --- call an async function to fetch response from loadEntries and then setEntries to its value ---
  useEffect(() => {
    async function getFinalEntries() {
      const finalEntries = await loadEntries();
      console.log("Final Entries: ", finalEntries);
      setEntries(finalEntries);
      console.log("Entries: ", entries);
      console.log("Deleted");
    }
    getFinalEntries();
  }, [isDeletingEntry]);

  const handleDelete = async (entry) => {
    // --- update isDeletingEntry to true since the function is deleting an entry ---
    setIsDeletingEntry(true);

    // --- check if entry is a client or professional then fetch the corresponding DELETE request ---
    if (entry.client_entry_id) { 
      const response = await fetch(`${process.env.DOMAIN}/api/client-list/${entry.client_entry_id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        console.error("Error", response.statusText)
      } 
    } else {
      const response = await fetch(`${process.env.DOMAIN}/api/professional-list/${entry.professional_entry_id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        console.error("Error", response.statusText)
      } 
    }
    
    // --- update isDeleting to false since function is finished deleting the entry ---
    setIsDeletingEntry(false);
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