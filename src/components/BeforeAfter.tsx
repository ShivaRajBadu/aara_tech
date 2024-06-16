import React from "react";
import Wrappper from "./Wrappper";
import Image from "next/image";

const BeforeAfter = () => {
  return (
    <section className="pb-10">
      <Wrappper>
        <div>
          <h1 className="text-[52px] text-paraText font-semibold">
            Before & After
          </h1>
          <div className="flex flex-col lg:flex-row gap-10  py-8 ">
            <div className="w-full relative">
              <Image
                src="/images/before.png"
                alt="before printing"
                width={0}
                height={0}
                sizes="(100vw, 100vh)"
                className="w-full h-[600px] object-cover rounded-[16px]"
              />
              <p className="absolute top-10 left-10 rounded-full bg-paraText px-4 py-1 text-foreground text-lg font-medium">
                Before
              </p>
            </div>
            <div className="w-full relative">
              <Image
                src="/images/after.png"
                alt="before printing"
                width={0}
                height={0}
                sizes="(100vw, 100vh)"
                className="w-full h-[600px] object-cover rounded-[16px]"
              />
              <p className="absolute top-10 left-10 rounded-full bg-paraText px-4 py-1 text-foreground text-lg font-medium">
                After
              </p>
            </div>
          </div>
        </div>
      </Wrappper>
    </section>
  );
};

export default BeforeAfter;
