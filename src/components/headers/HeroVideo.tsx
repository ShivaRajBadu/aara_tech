import React from "react";
import Image from "next/image";
const HeroVideo = () => {
  return (
    // <video
    //   className="w-full h-full object-cover"
    //   autoPlay
    //   muted
    //   loop
    //   preload="none"
    // >
    //   <source src="/videos/hero_video_l.mp4" type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    <Image
      src={`/images/main_image.png`}
      alt="hero"
      fill
      className="mx-auto rounded-2xl object-cover h-full object-left-top"
      draggable={false}
    />
  );
};

export default HeroVideo;
