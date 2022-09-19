import React from "react";
import WrappingVideo from '../../assets/wrapping-video.mp4'; 

function Hero() {
    return (
        <div className="video">
            <video controls autostart autoPlay src={WrappingVideo} type="wrapping-video/mp4" />
        </div>
      );
}

export default Hero; 