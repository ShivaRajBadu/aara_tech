"use client";
import React from "react";
import Wrappper from "../Wrappper";
import TestimonialCard from "./TestimonialCard";
import { useQuery } from "@tanstack/react-query";
import { getTestimonialData } from "@/lib/api";

const Testimonial = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Testimonial"],
    queryFn: getTestimonialData,
  });

  return (
    <div className="py-20 bg-[#D6DAFF]">
      <Wrappper>
        <h1 className="text-headingText text-[52px] font-medium text-center pb-10">
          Testimonial
        </h1>
        <div className="grid justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  gap-8 py-6 ">
          {data &&
            data.map((each: any, index: number) => (
              <TestimonialCard key={each.sys.id} each={each} index={index} />
            ))}
          {isPending &&
            !error &&
            [1, 2, 3, 4, 5].map((item) => (
              // shimmer
              <div
                key={item}
                className="h-[400px] w-[300px] bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
        </div>
      </Wrappper>
    </div>
  );
};

export default Testimonial;
