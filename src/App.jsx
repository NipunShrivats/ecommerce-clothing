import React from 'react'
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Nav from "./Components/Navbar/Navbar"

// Pages
import Home from "./Pages/Home/Home"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
