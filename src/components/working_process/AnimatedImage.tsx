import React from "react";

import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1.07 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      key={src}
      className="sticky top-80 lg:top-48 bg-green-300 w-[40%] overflow-hidden rounded-[16px] h-[300px] lg:h-[552px]"
    >
      <div className="relative w-full h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default AnimatedImage;
