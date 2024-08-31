import React from "react";
import "./footer.css";
import logo from "../../assets/logo/logo-bg.png";

import { Link } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiYoutubeFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <img src={logo} alt="" />

        <ul className="footer-link">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
          <div className="footer-icons-container">
            <Link to={""}>
              <PiInstagramLogoFill />
            </Link>
          </div>
          <div className="footer-icons-container">
            <Link to={""}>
              <RiYoutubeFill />
            </Link>
          </div>
          <div className="footer-icons-container">
            <Link to={""}>
              <FaFacebookSquare />
            </Link>
          </div>
          <div className="footer-icons-container">
            <Link to={""}>
              <IoLogoLinkedin />
            </Link>
          </div>
          <div className="footer-icons-container">
            <Link to={""}>
              <FaSquareXTwitter />
            </Link>
          </div>
          <div className="footer-icons-container">
            <Link to={""}>
              <IoLogoWhatsapp />
            </Link>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="title-line-big"></div>
          <p>Copyright @ 2024 | All Rights reserved.</p>
        </div>
      </div>
    </>
  );
}
