import React from "react";
import Logo from "../../assets/landingPage/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div style={{marginTop:"40px"}} className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h3><MdFoodBank />
              <span className='navbar-brand-text fw-7'>CookITUP</span></h3>
        </div>
        <div className="footer-icons">
        <Link to="https://twitter.com/cookitup1?s=11&t=kz0GuwT82IPHjIypVAScAA" target="_blank"><BsTwitter /></Link> 
        <Link to="https://instagram.com/cookitup_1?igshid=YmM0MjE2YWMzOA==" target="_blank"> <Instagram/> </Link>
         <Link to="https://www.facebook.com/profile.php?id=100093508644729&mibextid=LQQJ4d" target="_blank"><FaFacebookF /></Link>
          
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
