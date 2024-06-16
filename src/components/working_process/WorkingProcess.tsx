import React from "react";
import Wrappper from "../Wrappper";
import Image from "next/image";
import dynamic from "next/dynamic";

const WorkingSteps = dynamic(() => import("./WorkingSteps"));

const WorkingProcess = () => {
  return (
    <div className="py-12  relative">
      <Wrappper>
        <div>
          <h1 className="text-foreground text-center text-[48px] font-semibold pb-10">
            Our Working Process
          </h1>
          <WorkingSteps />
        </div>
      </Wrappper>
    </div>
  );
};

export default WorkingProcess;
