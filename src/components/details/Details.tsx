"use client";

import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/details/ImageGallery";
import FeatureWorks from "@/components/FeatureWorks";
import DetailPageShimmer from "@/components/shimmers/DetailPageShimmer";
import Wrappper from "@/components/Wrappper";
import { getEachWork } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import React from "react";

const Details = () => {
  const params = useSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["eachWork"],
    queryFn: () => getEachWork(params.get("id")!),
  });

  if (isLoading) {
    return <DetailPageShimmer />;
  }

  if (error) {
    throw new Error("Error fetching data");
  }

  if (Object.keys(data).length === 0) {
    return notFound();
  }

  return (
    <div>
      <div>
        <img
          src={data.imagesCollection.items[0].url}
          alt={data.imagesCollection.items[0].title}
          width={0}
          height={0}
          className="w-full h-[400px] lg:h-[570px] object-fill"
        />
      </div>
      <Wrappper>
        <div className="flex flex-col lg:flex-row justify-between max-lg:gap-10 py-16">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold text-headingText">
            {data.projectTitle}
          </h1>
          <p className="text-base md:text-lg font-normal text-paraText w-full lg:w-[40%] text-balance">
            {data.projectDescription}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-between items-start py-10">
          <div className="flex gap-12  flex-col md:flex-row lg:flex-col ">
            <div>
              <h4 className="text-headingText text-lg md:text-[24px] font-bold">
                Client
              </h4>
              <p className="text-paraText text-base md:text-[20px] font-medium">
                {data.clientName}
              </p>
            </div>
            <div>
              <h4 className="text-headingText text-lg md:text-[24px] font-bold">
                Date
              </h4>
              <p className="text-paraText text-base md:text-[20px] font-medium">
                {data.projectDate}
              </p>
            </div>
            {data.clientWebsite && (
              <div className="text-headingText text-lg md:text-[24px] font-bold">
                <h4>Website</h4>
                <Link
                  prefetch={false}
                  className="text-paraText text-base md:text-[20px] font-medium"
                  href={data.clientWebsite}
                  target="_blank"
                >
                  {data.clientWebsite}
                </Link>
              </div>
            )}
          </div>
          <div className="relative w-full lg:w-[70%] h-[300px] md:h-[448px] lg:h-[587px]">
            <img
              src={data.clientProjectImage.url}
              className="w-full h-full object-cover"
              alt={data.clientProjectImage.title}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-6 md:py-16">
          <div className="w-full lg:w-[40%] py-2">
            <h4 className="text-headingText text-[28px] md:text-[40px] font-semibold">
              The Challenge
            </h4>
            <p className="text-paraText text-base font-medium pt-8">
              {data.theChallengeDescription}
            </p>
          </div>
          <div className=" relative h-[280px] md:h-[496px] rounded-[16px] overflow-hidden w-full lg:w-[50%]">
            <img
              src={data.theChallengeImage.url}
              alt={data.theChallengeImage.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-6 md:py-16">
          <div className=" order-2 md:order-1 relative h-[280px] md:h-[496px] rounded-[16px] overflow-hidden w-full lg:w-[50%]">
            <img
              src={data.theOutcomeImage.url}
              className="w-full h-full object-cover"
              alt={data.theOutcomeImage.title}
            />
          </div>
          <div className=" w-full order-1 md:order-2 lg:w-[40%] py-2">
            <h4 className="text-headingText text-[28px] md:text-[40px] font-semibold">
              The Outcome
            </h4>
            <p className="text-paraText text-base font-medium pt-8">
              {data.theOutcomeDescription}
            </p>
          </div>
        </div>
        <ImageGallery images={data.imagesCollection.items} />
      </Wrappper>
      <FeatureWorks />
      <AboutSection />
    </div>
  );
};

export default Details;
