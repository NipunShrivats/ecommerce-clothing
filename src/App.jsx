import React from 'react'
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import { Sugar } from 'react-preloaders';
// Components
import Nav from "./Components/Navbar/Navbar"
import men_banner from "./assets/Frontend_Assets/banner_mens.png"
import women_banner from "./assets/Frontend_Assets/banner_women.png"
import kids_banner from "./assets/Frontend_Assets/banner_kids.png"
import Footer from "./Components/Footer/Footer"


// Pages
import Shop from "./Pages/Shop/Shop"
import ShopCategory from "./Pages/ShopCategory/ShopCategory"
import Product from "./Pages/Product/Product"
import Cart from "./Pages/Cart/cart"
import LoginSignup from "./Pages/loginSignup/loginSignup"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' exact={true} element={<Shop />} />
          <Route path='/mens' exact={true} element={<ShopCategory category="men" banner={men_banner} />} />

          <Route path='/women' exact={true} element={<ShopCategory category="women" banner={women_banner} />} />

          <Route path='/kids' exact={true} element={<ShopCategory category="kids" banner={kids_banner} />} />

          <Route path='/product' exact={true} element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' exact={true} element={<Cart />} />
          <Route path='/loginSignup' exact={true} element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
