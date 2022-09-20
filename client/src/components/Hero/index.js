import React from "react";
import PresentsVideo from '../../assets/present.mp4'; 

function Hero() {
    return (
        <div className="video">
            <div className='overlay'></div>
            <video autostart autoPlay loop muted src={PresentsVideo} type="present/mp4" />
            <div className="hero-text">
                <h2>Who Are You Shopping For?</h2>
                <p>Let us be your elves this season with curated gifts to fulfill every Christmas wish</p>
                <button type="submit" className="hero-btn">Start Shopping Now!</button>
            </div>
        </div>
      );
}

export default Hero; 