import React from "react";

import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      key={src}
      className="sticky  top-80 lg:top-48 bg-green-300 w-[40%] overflow-hidden rounded-[16px] h-[300px] lg:h-[572px]"
    >
      <div className="relative w-full h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default AnimatedImage;
