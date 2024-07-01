"use client";
import React from "react";
import Wrappper from "./Wrappper";
import ProductCard from "./ProductCard";
import { getCustomProductData } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const Banner = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["customProduct"],
    queryFn: getCustomProductData,
  });
  return (
    <section className="bg-gradient-to-r from-[#7D92FF] to-[#7C9EE8]  relative py-8 md:py-16">
      <img
        className="absolute z-0 top-0 left-0 w-full h-full"
        src="/images/product_bg.png"
        alt=""
      />
      <Wrappper>
        <div className=" relative z-10 flex flex-col lg:flex-row justify-between gap-4 ">
          <div className="w-full lg:w-[40%]">
            <h1 className="text-[36px] lg:text-[65px] text-balance font-bold text-foreground">
              Get Customized 3d Products
            </h1>
            <Link
              href="https://www.instagram.com/aaratech3d/"
              prefetch={false}
              target="_blank"
              className="bg-foreground block w-max my-8 px-6 py-3 text-primary rounded-[8px] text-[18px] font-semibold hover:scale-[1.03] duration-300"
            >
              Buy Product
            </Link>
          </div>
          <div className=" grid grid-cols-3 grid-rows-2 gap-5 w-full lg:w-[50%] ">
            {data &&
              data.map((each: any) => (
                <ProductCard key={each.sys.id} each={each} />
              ))}
            {isPending &&
              !error &&
              [1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="w-full h-[115px] md:h-[180px] lg:h-[185px] bg-gray-200 rounded-lg animate-pulse"
                ></div>
              ))}
            {error && <div>Sorry something went wrong</div>}
          </div>
        </div>
      </Wrappper>
    </section>
  );
};

export default Banner;
