import React from "react";
import Wrappper from "../Wrappper";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="py-20 bg-[#D6DAFF]">
      <Wrappper>
        <h1 className="text-headingText text-[52px] font-medium text-center pb-10">
          Testimonial
        </h1>
        <div className="grid justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 py-6 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <TestimonialCard key={item} index={item} />
          ))}
        </div>
      </Wrappper>
    </div>
  );
};

export default Testimonial;
