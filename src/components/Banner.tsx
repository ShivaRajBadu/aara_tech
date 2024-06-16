import React from "react";
import Wrappper from "./Wrappper";
import ProductCard from "./ProductCard";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#7D92FF] to-[#7C9EE8] py-16">
      <Wrappper>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="w-[40%]">
            <h1 className="text-[65px] text-balance font-bold text-foreground">
              Get Customized 3d Products
            </h1>
            <button className="bg-foreground my-8 px-6 py-3 text-primary rounded-[8px] text-[18px] font-semibold">
              Buy Product
            </button>
          </div>
          <div className="flex flex-wrap gap-5 w-[50%] justify-end">
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
