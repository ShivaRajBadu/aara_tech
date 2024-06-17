"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Link from "next/link";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1.1];
  };

  //   const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className=" flex items-center justify-center relative p-2 "
      ref={containerRef}
    >
      <div className="py-10 w-full relative">
        <Header translate={translate} />
        <Card translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center md:pb-16"
    >
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
    </motion.div>
  );
};

export const Card = ({
  scale,
  children,
}: {
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        scale,
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full  rounded-[30px] shadow-2xl"
    >
      {" "}
      {children}
    </motion.div>
  );
};
