import React from "react";
import Wrappper from "./Wrappper";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="my-16 py-8 bg-[#E8EBFF]">
      <Wrappper>
        <div className="flex gap-8 items-center">
          <div className="w-[40%]">
            <Image
              src="/images/3d-printing.png "
              alt="about"
              width={0}
              height={0}
              sizes="(100vw, 100vh)"
              className="w-[368px] mx-auto h-[368px] object-contain"
            />
          </div>
          <div className="w-[60%]">
            <h2 className="text-headingText text-[48px] font-semibolds pb-6">
              Lorem ipsum dolor sit amet consectetur. Donec.
            </h2>
            <Link
              className=" block w-max  rounded-[8px] bg-primary text-foreground px-6 py-2 text-base font-semibold"
              href="https://wa.me/919999999999"
            >
              Chat With Us on WhatsApp
            </Link>
          </div>
        </div>
      </Wrappper>
    </section>
  );
};
export default AboutSection;
