import React from "react";
import { Link } from "react-router-dom";

// PURPOSE - Allows admin to login and access a list of all form entries
// This is where I'll use Auth0 to validate the user

const AdminLogin = () => {
  return (
    <>
      <h1>Admin Login</h1>
      <Link to='/list'>Admin List Entries</Link>
    </>
  )
}

export default AdminLogin