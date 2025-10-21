import React from "react";
import "./Footer.css";
import logo_big from "../components/assets/logo_big.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faTelegram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <>
      <div className="footer-container ">
        <div className="footer-logo">
          <img src={logo_big} alt="logo-big" />
          <p>SethOsjaWEB </p>
         </div> 
      </div>
      <div className="footer-container ">
        {" "}
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-container ">
          <p>© 2025 MyPortfolio. All Rights Reserved.</p></div>
           <div className="footer-container">
        <div className="logo-icon">
         <div className="social-links">
      <a href="https://github.com/SokpisethNhoeun" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
     
      
      <a href="https://t.me/Nhoeunsokpiseth" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="https://facebook.com/Nhoeunsokpiseth" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.tiktok.com/@n_s_piseth" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="mailto:sokpisethnhom0963@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
