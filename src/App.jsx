import React from 'react'
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import { Sugar } from 'react-preloaders';
// Components
import Nav from "./Components/Navbar/Navbar"

// Pages
import Shop from "./Pages/Shop/Shop"
import ShopCategory from "./Pages/ShopCategory/ShopCategory"
import Product from "./Pages/Product/Product"
import Cart from "./Pages/Cart/cart"
import LoginSignup from "./Pages/loginSignup/loginSignup"
import Footer from './Components/Footer/Footer';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' exact={true} element={<Shop />} />
          <Route path='/mens' exact={true} element={<ShopCategory />} />
          <Route path='/women' exact={true} element={<ShopCategory />} />
          <Route path='/kids' exact={true} element={<ShopCategory />} />
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
