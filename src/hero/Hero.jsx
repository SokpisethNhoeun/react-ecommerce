import React from "react";
import "./Hero.css";
import hand_icon from '../components/assets/hand_icon.png'
import arrow_icon from '../components/assets/arrow.png'
import hero_image from '../components/assets/hero_image.png'
function Hero() {
  return (
    <div className="hero ">
      <div className="hero-left">
        <h3>New arrivals only</h3>
       <div className="hero-hand-icon">
            <p>New </p> 
            <img src={hand_icon} alt="hand_icon" />
       </div>
    
        <p>collections</p>
        <p> for everyone on earth enjoy it guy.</p>
       <div className="hero-latest-btn">
        <p>Latest collections</p>
        <img src={arrow_icon} alt="arrow" />
       </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero-img" />

      </div>
    </div>
  );
}

export default Hero;
