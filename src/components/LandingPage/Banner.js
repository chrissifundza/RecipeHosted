import React from "react";
import BannerBackground from "../../assets/landingPage/home-banner-background.png";
import BannerImage from "../../assets/landingPage/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Cook your favorite food, Search any recipe you want
          </h1>
          <p className="primary-text">
            
            Become the best chef in town by seconds, Cook for anyone in the world, 
            Follow step by step guide, no limits, Cook everything.
          </p>
          <button className="secondary-button">
           Get Started  Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
