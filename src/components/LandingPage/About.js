import React from "react";
import AboutBackground from "../../assets/landingPage/about-background.png";
import AboutBackgroundImage from "../../assets/landingPage/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="1" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About cookITUP</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
      
          We want to make cooking easy for evryone, especially students who have zero
          zero background of cooking, the app will assist them with their daily meals.
        </p>
        <p className="primary-text">
          We have all kinds of different food categories of any recipe from the whole world, this 
          means we are accomodating everyone in the world who wants to learn how to cook.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
