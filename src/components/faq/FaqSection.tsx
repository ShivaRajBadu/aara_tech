"use client";
import React, { useState } from "react";
import Wrappper from "../Wrappper";
import { faq } from "@/constants";
import FAQItem from "./FAQItem";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className=" bg-foreground  py-10 md:py-20 ">
      <Wrappper>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-[30%]">
            <h1 className="text-headingText text-[28px] md:text-[40px] lg:text-[48px] font-semibold text-balance pb-8 lg:pb-0">
              Frequently Asked Question
            </h1>
          </div>

          <div className="w-full lg:w-[50%]">
            {faq.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                index={index}
                onToggle={() => handleToggle(index)}
                isOpen={openIndex === index}
              />
            ))}
          </div>
        </div>
      </Wrappper>
    </section>
  );
};

export default FaqSection;
