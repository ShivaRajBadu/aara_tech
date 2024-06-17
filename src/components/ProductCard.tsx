import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div
      style={{
        boxShadow:
          "-3px 15px 15px 0px rgba(13, 21, 45, 0.09), -1px 4px 8px 0px rgba(13, 21, 45, 0.10)",
      }}
      className="bg-foreground  relative z-10  rounded-[8px] border-[5px] border-foreground"
    >
      <Image
        src="/images/final.jpg"
        alt="product"
        width={0}
        height={0}
        sizes="(100vw, 100vh)"
        className="w-full h-[115px] md:h-[180px] lg:h-[185px] object-cover rounded-l-[8px] rounded-r-[8px] rounded-b-[0px]"
      />
      <h3 className="text-headingText text-xs md:text-sm lg:text-base font-semibold text-center py-1 md:py-2">
        Magical 3D lamps
      </h3>
    </div>
  );
};

export default ProductCard;
