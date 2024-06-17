import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Image from "next/image";
import { ContainerScroll } from "../Text";

const Headers = () => {
  return (
    <div className="w-full bg-background relative text-foreground  overflow-hidden pb-10">
      <Image
        src="/images/hero_pattern.png"
        alt=""
        width={0}
        height={0}
        sizes="(100vw, 100vh)"
        priority
        className="absolute top-0 left-0 w-full h-full"
      />
      <Navigation />
      <HeroSection />
      {/* <ContainerScroll>
        <Image
          src={`/images/main_image.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll> */}
    </div>
  );
};

export default Headers;
