import React from "react"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"

// PURPOSE - A component that users are directed to when the page they're trying to reach doesn't exist

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Hero title='404 Not Found' image='../walkbridge.png' />
      <br />
        <main style={{fontSize: "18px"}}>
          Please navigate back to the Home page.
        </main>
      <br /><br />
      <hr />
      <Footer />
    </>
  )
}

export default NoPage