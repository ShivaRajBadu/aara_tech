import React from "react";
import Wrappper from "./Wrappper";
import Image from "next/image";

const FeatureWorks = () => {
  return (
    <div className="bg-foreground py-10">
      <Wrappper>
        <div>
          <h1 className="text-headingText text-[48px] font-semibold pb-10">
            Feature Works
          </h1>
          <div className="grid grid-cols-2 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className=" " key={item}>
                <div className="relative group cursor-pointer h-[596px] w-full  flex overflow-hidden rounded-[16px]">
                  <Image
                    src={`/images/works/work_${item}.png`}
                    alt="feature"
                    fill
                    sizes="(100vw, 100vh)"
                    className="translate-x-0 group-hover:-translate-x-full transition-transform duration-500 ease-linear"
                  />
                  <Image
                    src={`/images/works/work_${item + 1}.png`}
                    alt="feature"
                    fill
                    sizes="(100vw, 100vh)"
                    className="translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-linear"
                  />
                </div>
                <div className=" cursor-pointer flex  justify-between py-6 ">
                  <h2 className="text-[28px] text-headingText font-semibold">
                    Architecture Plans
                  </h2>
                  <svg
                    className=""
                    width="32"
                    height="32"
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
              </div>
            ))}
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default FeatureWorks;
