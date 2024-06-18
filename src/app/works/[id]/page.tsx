import AboutSection from "@/components/AboutSection";
import FeatureWorks from "@/components/FeatureWorks";
import Wrappper from "@/components/Wrappper";

import Link from "next/link";
import React from "react";

export function generateStaticParams() {
  return [1, 2, 3, 4, 5].map((item) => ({
    id: item.toString(),
  }));
}

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);

  return (
    <div>
      <div>
        <img
          src="/images/detail_main.png"
          alt="work"
          width={0}
          height={0}
          className="w-full h-[400px] lg:h-[570px] object-fill"
        />
      </div>
      <Wrappper>
        <div className="flex flex-col lg:flex-row justify-between max-lg:gap-10 py-16">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold text-headingText">
            Architecture Plans
          </h1>
          <p className=" text-base md:text-lg font-normal text-paraText w-full lg:w-[40%] text-balance">
            Lorem ipsum dolor sit amet consectetur. Eleifend dui dis lacinia
            pellentesque potenti eu habitasse. Nec ut non vitae in euismod
            viverra mauris odio quisque. Scelerisque velit at tempus a tempor.
            Vulputate mattis morbi purus ut sed facilisi feugiat ut nec. Enim
            tortor in purus egestas integer. Gravida nec etiam gravida at
            pulvinar quis convallis lorem. Purus feugiat quis volutpat mauris
            nulla nisl. Justo eu amet eget etiam urna semper neque.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-between items-start py-10">
          <div className="flex gap-12  flex-col md:flex-row lg:flex-col ">
            <div>
              <h4 className="text-headingText text-lg md:text-[24px] font-bold">
                Client
              </h4>
              <p className="text-paraText text-base md:text-[20px] font-medium">
                Company Name
              </p>
            </div>
            <div>
              <h4 className="text-headingText text-lg md:text-[24px] font-bold">
                Date
              </h4>
              <p className="text-paraText text-base md:text-[20px] font-medium">
                March 2024
              </p>
            </div>
            <div className="text-headingText text-lg md:text-[24px] font-bold">
              <h4>Website</h4>
              <Link
                prefetch={false}
                className="text-paraText text-base md:text-[20px] font-medium"
                href="https://shivarajbadu.com.np"
                target="_blank"
              >
                www.company.com
              </Link>
            </div>
          </div>
          <div className="relative w-full lg:w-[70%] h-[300px] md:h-[448px] lg:h-[587px]">
            <img
              src="/images/client_side.png"
              className="w-full h-full object-cover"
              alt="work to be done"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-6 md:py-16">
          <div className="w-full lg:w-[40%] py-2">
            <h4 className="text-headingText text-[28px] md:text-[40px] font-semibold">
              The Challenge
            </h4>
            <p className="text-paraText text-base font-medium pt-8">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p className="text-paraText text-base font-medium py-3">
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
          </div>
          <div className=" relative h-[280px] md:h-[496px] rounded-[16px] overflow-hidden w-full lg:w-[50%]">
            <img
              src="/images/develop_1.png"
              alt="the challenge image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-6 md:py-16">
          <div className=" order-2 md:order-1 relative h-[280px] md:h-[496px] rounded-[16px] overflow-hidden w-full lg:w-[50%]">
            <img
              src="/images/develop_2.png"
              className="w-full h-full object-cover"
              alt="the challenge image"
            />
          </div>
          <div className=" w-full order-1 md:order-2 lg:w-[40%] py-2">
            <h4 className="text-headingText text-[28px] md:text-[40px] font-semibold">
              The Outcome
            </h4>
            <p className="text-paraText text-base font-medium pt-8">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p className="text-paraText text-base font-medium py-3">
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <img
            src="/images/develop_1.png"
            alt="prototype"
            className="w-full md:w-[50%]  h-[320px] md:h-[350px] lg:h-[640px]  rounded-[16px]"
          />
          <img
            src="/images/develop_3.png"
            alt="prototype"
            className="w-full md:w-[50%]   h-[320px] md:h-[640px] rounded-[16px]"
          />
        </div>
        <div className="relative  h-[275px] md:h-[400px] lg:h-[640px] my-10 rounded-[16px] overflow-hidden w-full">
          <img
            src="/images/develop_2.png"
            className="w-full h-full object-cover"
            alt="the challenge image"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <img
            src="/images/develop_4.png"
            alt="prototype"
            className="w-full md:w-[50%] bg-gray-300  h-[320px] md:h-[350px] lg:h-[640px]  rounded-[16px]"
          />
          <img
            src="/images/detail_main.png"
            alt="prototype"
            className="w-full md:w-[50%]   h-[320px] md:h-[640px] rounded-[16px]"
          />
        </div>
      </Wrappper>
      <FeatureWorks />
      <AboutSection />
    </div>
  );
};

export default page;
