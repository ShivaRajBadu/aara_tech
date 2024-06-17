"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Wrappper from "../Wrappper";
import HeroVideo from "./HeroVideo";
import { useScroll, useTransform, motion } from "framer-motion";

const HeroSection = () => {
  const target = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const scroll = useScroll({
    target,
  });
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  const scaleDimensions = () => {
    return isMobile ? [1, 1] : [1.05, 1.2];
  };

  const scale = useTransform(scroll.scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div ref={target} className="pb-8">
      <Wrappper>
        <div className=" max-w-[972px] mx-auto text-center py-12">
          <h1
            className="text-[36px] md:text-[48px] lg:text-[64px] font-semibold text-center bg-darkHeading 
        bg-gradient-to-t from-[#E6EAF2]/0 to-[#C3CCD9]  bg-clip-text
        "
          >
            Lorem ipsum dolor sit amet consectetur. Orci eu in nulla{" "}
          </h1>
          <p className="text-base md:text-lg font-medium text-subtitle text-center mt-6  text-balance mx-auto">
            Lorem ipsum dolor sit amet consectetur. Nec turpis lacus feugiat
            fermentum sagittis. Magna scelerisque mauris habitasse vitae amet.
            Auctor dis congue ut
          </p>
          <Link
            className="mx-auto rounded-[8px] bg-primary text-foreground px-6 py-3 mt-10 block max-w-max text-base font-semibold"
            href="https://wa.me/919999999999"
          >
            Chat With Us on WhatsApp
          </Link>
        </div>
        <motion.div
          style={{
            scale,
          }}
          className="relative h-[260px] md:h-[467px] lg:h-[773px] my-2 md:my-16 overflow-hidden rounded-[16px] border border-videoBorder"
        >
          <HeroVideo />
        </motion.div>
      </Wrappper>
    </div>
  );
};

export default HeroSection;
