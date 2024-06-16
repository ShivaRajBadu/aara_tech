import AboutSection from "@/components/AboutSection";
import Wrappper from "@/components/Wrappper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Image
          src="/images/detail_main.png"
          alt="work"
          width={0}
          height={0}
          sizes="(100vw, 100vh)"
          className="w-full h-[600px] object-fill"
        />
      </div>
      <Wrappper>
        <div className="flex justify-between py-16">
          <h1 className="text-[48px] font-semibold text-headingText">
            Architecture Plans
          </h1>
          <p className=" text-lg font-normal text-paraText w-[40%] text-balance">
            Lorem ipsum dolor sit amet consectetur. Eleifend dui dis lacinia
            pellentesque potenti eu habitasse. Nec ut non vitae in euismod
            viverra mauris odio quisque. Scelerisque velit at tempus a tempor.
            Vulputate mattis morbi purus ut sed facilisi feugiat ut nec. Enim
            tortor in purus egestas integer. Gravida nec etiam gravida at
            pulvinar quis convallis lorem. Purus feugiat quis volutpat mauris
            nulla nisl. Justo eu amet eget etiam urna semper neque.
          </p>
        </div>
        <div className="flex gap-10 justify-between items-start py-10">
          <div className="space-y-12">
            <div>
              <h4 className="text-headingText text-[24px] font-bold">Client</h4>
              <p className="text-paraText text-[20px] font-medium">
                Company Name
              </p>
            </div>
            <div>
              <h4 className="text-headingText text-[24px] font-bold">Date</h4>
              <p className="text-paraText text-[20px] font-medium">
                March 2024
              </p>
            </div>
            <div className="text-headingText text-[24px] font-bold">
              <h4>Website</h4>
              <Link
                prefetch={false}
                className="text-paraText text-[20px] font-medium"
                href="https://shivarajbadu.com.np"
                target="_blank"
              >
                www.company.com
              </Link>
            </div>
          </div>
          <div className="relative w-[70%] h-[587px]">
            <Image
              src="/images/client_side.png"
              fill
              sizes="(100vw, 100vh)"
              alt="work to be done"
            />
          </div>
        </div>
        <div className="flex justify-between gap-10 items-start py-16">
          <div className="w-[40%] py-2">
            <h4 className="text-headingText text-[40px] font-semibold">
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
          <div className=" relative h-[496px] rounded-[16px] overflow-hidden w-[50%]">
            <Image
              src="/images/develop_1.png"
              fill
              sizes="(100vw, 100vh)"
              alt="the challenge image"
            />
          </div>
        </div>
        <div className="flex justify-between gap-10 items-start py-16">
          <div className=" relative h-[496px] rounded-[16px] overflow-hidden w-[50%]">
            <Image
              src="/images/develop_2.png"
              fill
              sizes="(100vw, 100vh)"
              alt="the challenge image"
            />
          </div>
          <div className="w-[40%] py-2">
            <h4 className="text-headingText text-[40px] font-semibold">
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
        <div className="flex gap-6 items-center justify-center">
          <Image
            src="/images/develop_1.png"
            alt="prototype"
            width={0}
            height={0}
            className="w-[50%]  h-[640px]  rounded-[16px]"
            sizes="(100vw, 100vh)"
          />
          <Image
            src="/images/develop_3.png"
            alt="prototype"
            width={0}
            height={0}
            className="w-[50%]  h-[640px] rounded-[16px]"
            sizes="(100vw, 100vh)"
          />
        </div>
        <div className="relative h-[640px] my-10 rounded-[16px] overflow-hidden w-full">
          <Image
            src="/images/develop_2.png"
            fill
            sizes="(100vw, 100vh)"
            alt="the challenge image"
          />
        </div>
        <div className="flex w-full gap-6 items-center justify-center py-10">
          <Image
            src="/images/develop_4.png"
            alt="prototype"
            width={0}
            height={0}
            className="w-[50%]  h-[640px] bg-gray-200  rounded-[16px]"
            sizes="(100vw, 100vh)"
          />
          <Image
            src="/images/detail_main.png"
            alt="prototype"
            width={0}
            height={0}
            className="w-[50%]  h-[640px] rounded-[16px]"
            sizes="(100vw, 100vh)"
          />
        </div>
      </Wrappper>
      <AboutSection />
    </div>
  );
};

export default page;
