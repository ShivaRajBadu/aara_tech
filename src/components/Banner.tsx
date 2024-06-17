import React from "react";
import Wrappper from "./Wrappper";
import ProductCard from "./ProductCard";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#7D92FF] to-[#7C9EE8]  relative py-8 md:py-16">
      <Image
        className="absolute z-0 top-0 left-0 w-full h-full"
        src="/images/product_bg.png"
        alt=""
        width={0}
        height={0}
        sizes="(100vw, 100vh)"
      />
      <Wrappper>
        <div className="flex flex-col lg:flex-row justify-between gap-4 ">
          <div className="w-full lg:w-[40%]">
            <h1 className="text-[36px] lg:text-[65px] text-balance font-bold text-foreground">
              Get Customized 3d Products
            </h1>
            <button className="bg-foreground my-8 px-6 py-3 text-primary rounded-[8px] text-[18px] font-semibold">
              Buy Product
            </button>
          </div>
          <div className=" grid grid-cols-3 gap-5 w-full lg:w-[50%] ">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ProductCard key={item} />
            ))}
          </div>
        </div>
      </Wrappper>
    </section>
  );
};

export default Banner;
