import React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";

const AnimatedImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      key={src}
      className="sticky top-36 bg-green-300 w-[40%] overflow-hidden rounded-[16px] h-[572px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Image src={src} alt={alt} fill sizes="(100vw, 100vh)" />
    </motion.div>
  );
};

export default AnimatedImage;
