import React from "react";

const HeroVideo = () => {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      preload="none"
    >
      <source src="/videos/hero_video_l.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
