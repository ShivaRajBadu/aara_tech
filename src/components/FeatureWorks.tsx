"use client";

import React from "react";
import Wrappper from "./Wrappper";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getWorkData } from "@/lib/api";
import WorkCard from "./WorkCard";
import { featureWork } from "@/app/types";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data &&
              data.map((each: featureWork) => (
                <WorkCard key={each.sys.id} workDetail={each} />
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
