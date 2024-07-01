"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Wrappper from "../Wrappper";
import HeroVideo from "./HeroVideo";
import { useScroll, useTransform, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getHeroSectionData } from "@/lib/api";
import TextShimmer from "../shimmers/TextShimmer";

const HeroSection = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["heroData"],
    queryFn: getHeroSectionData,
  });

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
    return isMobile ? [1, 1] : [1.05, 1.6];
  };
  const translateDimensions = () => {
    return isMobile ? [0, 0] : [0, 750];
  };
  const opacityDimensions = () => {
    return isMobile ? [0, 0] : [0, 1];
  };

  const translate = useTransform(
    scroll.scrollYProgress,
    [0, 0.9],
    translateDimensions()
  );
  const scale = useTransform(
    scroll.scrollYProgress,
    [0, 0.8],
    scaleDimensions()
  );
  const opacity = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    opacityDimensions()
  );
  const borderRadius = useTransform(scroll.scrollYProgress, [0, 0.1], [16, 0]);

  return (
    <div ref={target} className="pb-8 relative z-10">
      <Wrappper>
        <motion.div
          style={{
            translateY: translate,
          }}
          className=" relative z-40 max-w-[972px] mx-auto text-center py-8 sm:py-12"
        >
          {data ? (
            <h1
              className="text-[30px] sm:text-[36px] md:text-[44px] leading-relaxed md:leading-relaxed  lg:leading-normal lg:text-[62px] xl:text-[64px] font-semibold text-center bg-darkHeading 
        bg-gradient-to-t from-[#E6EAF2]/0 to-[#C3CCD9]  bg-clip-text "
            >
              {/* {data.title} */}
              Welcome to Aara Technology,{" "}
              <span className="text-[22px] block sm:text-[26px] md:text-[30px] lg:text-[44px] text-[#E6EAF2]/60">
                where innovation meets execution
              </span>
            </h1>
          ) : (
            <TextShimmer
              className="w-[80%] h-16 text-center mx-auto my-6"
              lines={2}
            />
          )}

          {data ? (
            <div className="flex mt-12 gap-6 text-start ">
              <p className="text-xs sm:text-sm w-1/2 md:text-lg font-medium text-subtitle   mx-auto">
                {data.subtitleLeft}
              </p>
              <p className="border-2 rounded-full border-primary"></p>
              <p className="text-xs sm:text-sm w-1/2 md:text-lg font-medium text-subtitle   mx-auto">
                {data.subtitleRight}
              </p>
            </div>
          ) : (
            <TextShimmer
              className="w-[80%] h-4 text-center mx-auto"
              lines={2}
            />
          )}

          <Link
            target="_blank"
            className="hover:scale-[1.03] duration-300 ease-linear mx-auto rounded-[8px] bg-primary text-foreground px-6 py-3 mt-10 block max-w-max   text-xs sm:text-sm md:text-base font-semibold"
            href="https://wa.me/9817396487"
          >
            Chat With Us on WhatsApp
          </Link>
        </motion.div>
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="relative h-[260px] md:h-[467px] lg:h-[773px] my-2 md:my-16 overflow-hidden  border border-videoBorder"
        >
          <motion.div
            style={{
              opacity,
            }}
            className="absolute inset-0 w-full h-full bg-background/90 z-20"
          ></motion.div>
          <HeroVideo src={data?.heroImage.url} />
        </motion.div>
      </Wrappper>
    </div>
  );
};

export default HeroSection;
