import React from "react";

import { animate, useInView } from "framer-motion";
const ContentAnimation = ({ step }: any) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px 0px 0px",
  });

  return (
    <div ref={ref} className="mb-12 h-[650px]  ">
      <div className="my-auto h-full flex flex-col justify-center items-start">
        <p className="text-lg font-medium">0 {step.id}</p>
        <h3 className="text-[36px] font-semibold pt-3 pb-5">{step.title}</h3>
        <p className="text-[20px] font-medium text-foreground/80 w-full max-w-[90%] text-balance">
          {step.content}
        </p>
      </div>
    </div>
  );
};

export default ContentAnimation;
