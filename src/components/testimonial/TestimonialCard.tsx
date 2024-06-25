import React from "react";
import Stars from "./Stars";

const TestimonialCard = ({ each, index }: { each: any; index: number }) => {
  return (
    <div
      className={` px-5 py-6 bg-foreground text-headingText  rounded-[16px]`}
    >
      <div className="flex items-start  gap-4">
        <img
          src={each.reviewerPhoto.url}
          alt={each.reviewerPhoto.title}
          className="object-cover rounded-full overflow-hidden w-[50px] h-[50px] "
        />
        <div className=" ">
          <h5 className="font-medium text-base text-headingText">
            {each.reviewerName}
          </h5>
          <Stars starSize="20" rating={each.ratingNumber} />
        </div>
      </div>
      <p className="text-base text-paraText font-medium py-4">
        {each.description}
      </p>
      {/* <p className="text-headingText text-xl"> {index}</p> */}
      {each.projectPhoto && (
        <img
          src={each.projectPhoto.url}
          alt={each.projectPhoto.title}
          className="w-full h-[330px] mt-5 rounded-[12px] object-cover"
        />
      )}
    </div>
  );
};

export default TestimonialCard;
