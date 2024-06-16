"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedImage from "./AnimatedImage";
import { AnimatePresence, motion } from "framer-motion";
import { workingStep } from "@/constants";
import ContentAnimation from "./ContentAnimation";
const WorkingSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex items-start justify-between py-20 ">
      <AnimatedImage
        src={workingStep[currentStep].image}
        alt={workingStep[currentStep].title}
      />

      <div className="w-[50%]">
        {workingStep.map((step, index) => (
          <ContentAnimation key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default WorkingSteps;
