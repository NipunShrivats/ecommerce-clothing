import { React, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo/logo-bg.png"
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [menu, setMenu] = useState("shop")
    return (
        <>
            <div className="navbar">
                <div className='nav-logo'>
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <ul className='nav-menu'>
                    <li
                        onClick={() => { setMenu("shop") }}>
                        <Link to="/">shop</Link>
                        {menu === "shop" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => { setMenu("men") }}>
                        <Link to="/mens">men</Link>
                        {menu === "men" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => { setMenu("women") }}>
                        <Link to="/women">women</Link>
                        {menu === "women" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => { setMenu("kids") }}>
                        <Link to="/kids">kids</Link>
                        {menu === "kids" ? <hr /> : <></>}
                    </li>
                </ul>

                <div className='nav-login-cart'>

                    <Link to="/loginSignup"><button>Login</button></Link>

                    <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{0}</div>
                </div>
            </div>
        </>
    )
}
