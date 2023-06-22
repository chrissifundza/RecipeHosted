import React, { Component } from "react";
import Slider from "react-slick";
import ProfilePic from "../../assets/landingPage/s1.jpeg";
import ProfilePic2 from "../../assets/landingPage/s2.jpg";
import ProfilePic3 from "../../assets/landingPage/s3.jpg";
import { AiFillStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function TestSlider() {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
     
    };
    return (
      <div >
        
        <Slider {...settings}>
        <div className="testimonial-section-bottom">
        <div className="img-container"> 
        <img src={ProfilePic} alt="" />
        </div>
        <p>
          I had learnt a lot from the app, its amazing, its what I was missing in my life, this is very useful, try it and see for yourself.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Kate Mokoena</h2>
      </div>
       
      <div className="testimonial-section-bottom">
        <div className="img-container">
        <img src={ProfilePic2} alt="" />
        </div>
        
        <p>
          I had learnt a lot from the app, its amazing, its what I was missing in my life, this is very useful, try it and see for yourself.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Nicolete Coetze </h2>
      </div>
      <div className="testimonial-section-bottom">
      <div className="img-container">
        <img src={ProfilePic3} alt="" />
        </div>
        <p>
          I had learnt a lot from the app, its amazing, its what I was missing in my life, this is very useful, try it and see for yourself.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Tin Jeung</h2>
      </div>
          
        </Slider>
      </div>
    );
  
}