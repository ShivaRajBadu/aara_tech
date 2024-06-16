import Link from "next/link";
import React from "react";
import Wrappper from "../Wrappper";
import HeroVideo from "./HeroVideo";

const HeroSection = () => {
  return (
    <div className="pb-8">
      <Wrappper>
        <div className=" max-w-[972px] mx-auto text-center py-12">
          <h1
            className="text-[64px] font-semibold text-center bg-darkHeading 
        bg-gradient-to-t from-[#E6EAF2]/0 to-[#C3CCD9]  bg-clip-text
        "
          >
            Lorem ipsum dolor sit amet consectetur. Orci eu in nulla{" "}
          </h1>
          <p className="text-lg font-medium text-subtitle text-center mt-6  text-balance mx-auto">
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
        <div className="h-[773px] my-16 overflow-hidden rounded-[16px] border border-videoBorder">
          <HeroVideo />
        </div>
      </Wrappper>
    </div>
  );
};

export default HeroSection;
