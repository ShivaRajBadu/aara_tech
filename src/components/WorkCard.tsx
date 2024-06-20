import Link from "next/link";
import React from "react";
import { featureWork } from "@/app/types";

const WorkCard = ({ workDetail }: { workDetail: featureWork }) => {
  return (
    <Link
      prefetch={false}
      href={`/works?id=${workDetail.sys.id}`}
      className=" w-full"
      key={workDetail.sys.id}
    >
      <div className="relative group cursor-pointer h-[390px] md:h-[336px] lg:h-[394px] w-full  flex overflow-hidden rounded-[16px]">
        <img
          src={workDetail.imagesCollection.items[0].url}
          alt={workDetail.imagesCollection.items[0].title}
          className="absolute inset-0 block h-full object-cover w-full translate-x-0 group-hover:-translate-x-full transition-transform duration-500 ease-linear"
        />
        <img
          src={workDetail.imagesCollection.items[1].url}
          alt={workDetail.imagesCollection.items[1].title}
          className="absolute inset-0 object-cover w-full translate-x-full group-hover:translate-x-0 h-full block transition-transform duration-500 ease-linear"
        />
      </div>
      <div className=" cursor-pointer flex items-center  justify-between py-6 ">
        <h2 className="text-lg md:text-[20px] lg:text-[24px] xl:text-[28px] text-headingText font-semibold">
          {workDetail.projectTitle}
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
  );
};

export default WorkCard;
