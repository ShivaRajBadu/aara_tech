"use client";

import React from "react";
import Wrappper from "./Wrappper";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getWorkData } from "@/lib/api";

const FeatureWorks = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["worksData"],
    queryFn: getWorkData,
  });

  return (
    <div className="bg-foreground py-10">
      <Wrappper>
        <div>
          <h1 className="text-headingText text-[28px] md:text-[40px] lg:text-[48px] font-semibold pb-10">
            Feature Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data &&
              data.map((each: any) => (
                <Link
                  prefetch={false}
                  href={`/works?id=${each.sys.id}`}
                  className=" w-full"
                  key={each.sys.id}
                >
                  <div className="relative group cursor-pointer h-[390px] md:h-[336px] lg:h-[436px] xl:h-[596px] w-full  flex overflow-hidden rounded-[16px]">
                    <img
                      src={each.imagesCollection.items[0].url}
                      alt={each.imagesCollection.items[0].title}
                      className="absolute inset-0 block h-full object-cover w-full translate-x-0 group-hover:-translate-x-full transition-transform duration-500 ease-linear"
                    />
                    <img
                      src={each.imagesCollection.items[1].url}
                      alt={each.imagesCollection.items[1].title}
                      className="absolute inset-0 object-cover w-full translate-x-full group-hover:translate-x-0 h-full block transition-transform duration-500 ease-linear"
                    />
                  </div>
                  <div className=" cursor-pointer flex items-center  justify-between py-6 ">
                    <h2 className="text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] text-headingText font-semibold">
                      {each.projectTitle}
                    </h2>
                    <svg
                      className="h-5 w-5 md:w-6 md:h-6 lg:w-8 lg:h-8 animate-bounce"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 26L26 6M26 6V21M26 6H11"
                        stroke="#0E1829"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            {isPending &&
              !error &&
              [1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="w-full h-[336px] md:h-[336px] lg:h-[436px] xl:h-[596px] bg-slate-300 rounded-[16px] animate-pulse"
                ></div>
              ))}
            {error && <div>Sorry! Something went wrong</div>}
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default FeatureWorks;
