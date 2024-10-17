import React from "react";

import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      <h1>Admin Login</h1>
      <Link to='/list'>Admin List Entries</Link>
    </>
  )
}

export default AdminLogin