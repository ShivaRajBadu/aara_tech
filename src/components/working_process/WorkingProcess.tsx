import React from "react";
import Wrappper from "../Wrappper";
import dynamic from "next/dynamic";
import { workingStep } from "@/constants";

const WorkingSteps = dynamic(() => import("./WorkingSteps"));

const WorkingProcess = () => {
  return (
    <div className="py-12  relative bg-background text-foreground ">
      <Wrappper>
        <div>
          <h1 className="text-foreground text-center text-[28px] md:text-[40px] lg:text-[48px] font-semibold pb-10">
            Our Working Process
          </h1>
          <div className="block lg:hidden">
            {workingStep.map((step: any, index: number) => (
              <div key={index} className="py-6">
                <div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[350px] md:h-[400px] object-cover"
                  />
                </div>
                <div className="my-auto h-full flex flex-col justify-center items-start py-6">
                  <p className="text-lg font-medium">0 {step.id}</p>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[36px] font-semibold pt-2 pb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-[20px] font-medium text-foreground/80 w-full  text-balance">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <WorkingSteps workingStep={workingStep} />
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default WorkingProcess;
