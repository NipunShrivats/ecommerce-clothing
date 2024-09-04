import { React, useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo-bg.png";
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <RxHamburgerMenu className="nav-dropdown" onClick={dropDown_toggle} />
        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/mens">men</Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/women">women</Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids">kids</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/loginSignup">
            <button>Login</button>
          </Link>

          <div className="cart-conatiner">
            <Link to="/cart">
              <span className="cart-icon">
                <FiShoppingCart />
              </span>
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
