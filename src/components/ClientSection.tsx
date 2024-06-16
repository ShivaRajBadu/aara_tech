import React from "react";
import Wrappper from "./Wrappper";
import Image from "next/image";
import { clientLogo } from "@/constants";

const ClientSection = () => {
  return (
    <div className="bg-foreground py-16">
      <Wrappper>
        <h1 className="text-headingText text-[32px] font-semibold text-center py-10">
          Some of Our Clients
        </h1>
        <div className="flex gap-10 flex-wrap w-full justify-evenly py-10 ">
          {clientLogo.map((item) => (
            <div key={item.id} className="px-4 py-2">
              <div className="relative w-[140px] h-[100px] p-3">
                <Image
                  src={item.img}
                  fill
                  sizes="(100vw, 100vh)"
                  className="w-full h-full object-contain mix-blend-multiply"
                  alt="client logo"
                />
              </div>
            </div>
          ))}
        </div>
      </Wrappper>
    </div>
  );
};

export default ClientSection;
