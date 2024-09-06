import React from "react";
import "./Navbar.css";
import { FaCaretDown } from "react-icons/fa6";

import Navlogo from "../../assets/logo/logo.jpg";
import Admin_profile from "../../assets/Admin_Assets/admin-profile.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar container-nav">
        <img src={Navlogo} alt="" className="navlogo" />
        <div className="admin-box">
          <img src={Admin_profile} alt="" className="admin_profile" />
          <span>
            <FaCaretDown />
          </span>
        </div>
      </div>
    </>
  );
}
