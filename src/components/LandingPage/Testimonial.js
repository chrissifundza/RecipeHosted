import React from "react";
import ProfilePic from "../../assets/landingPage/s1.jpeg";
import { AiFillStar } from "react-icons/ai";
import "./index.css";
import TestSlider from "./testimonialSlider";
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Get motivated from other people who have used the app, they had zero background of cooking, the app came in handy for them.
        </p>
      </div>
      <div className="divTestimonial">
        <div className=" container testimonialContainer"> 
          <TestSlider/>
        </div>
      </div>
      
     
    </div>
  );
};

export default Testimonial;
