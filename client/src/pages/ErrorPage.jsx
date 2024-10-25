import React from "react"
import Header from "../components/Header";
import { Link } from "react-router-dom"

// PURPOSE - A component that users are directed to when the page they're trying to reach doesn't exist

const NoPage = () => {
  return (
    <>
      <Header />
      <h1>404 Not Found</h1>
      <hr />
      <Link to="/">Home</Link>
    </>
  )
}

export default NoPage