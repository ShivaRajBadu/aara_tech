import React from "react";
import Stars from "./Stars";

const TestimonialCard = ({ index }: { index: number }) => {
  const showImage = index === 1 || index == 3 || index === 4;
  return (
    <div
      className={`${
        showImage ? "row-span-2" : ""
      } px-5 py-6 bg-foreground text-headingText  rounded-[16px]`}
    >
      <div className="flex items-start  gap-4">
        <img
          src="/images/design.jpg"
          alt="user profile"
          className="object-cover rounded-full overflow-hidden w-[50px] h-[50px] "
        />
        <div className=" ">
          <h5 className="font-medium text-base text-headingText">
            Sla er&apos;s Realm
          </h5>
          <Stars starSize="20" rating={3} />
        </div>
      </div>
      <p className="text-base text-paraText font-medium py-4">
        I recently collaborated with Aaratech 3D Design to create a custom case
        for my product and several components for my air quality sensor. From
        the start, the team was highly professional and deeply involved in
        understanding the specific needs of my project.{" "}
      </p>
      {/* <p className="text-headingText text-xl"> {index}</p> */}
      {showImage && (
        <img
          src="/images/works/work_3.png"
          alt="test"
          className="w-full h-[330px] mt-5 rounded-[12px] object-cover"
        />
      )}
    </div>
  );
};

export default TestimonialCard;
