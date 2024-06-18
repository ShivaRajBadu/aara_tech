"use client";
import React from "react";
import Wrappper from "./Wrappper";

import { getClientsLogos } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

import LogoShimmer from "./shimmers/LogoShimmer";

const ClientSection = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["clientsLogos"],
    queryFn: getClientsLogos,
  });

  return (
    <div className="bg-foreground py-8 md:py-16">
      <Wrappper>
        <h1 className="text-headingText  text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-center py-5 md:py-10">
          Some of Our Clients
        </h1>
        <div className="grid gap-5 md:gap-10 grid-cols-3 justify-between justify-items-center md:grid-cols-4 lg:grid-cols-6 w-full  py-10 ">
          {data &&
            data.map((item: any) => (
              <div key={item.sys.id} className="md:px-4 md:py-2">
                <div className="relative w-[80px] h-[60px] sm:w-[100px] sm:h-[80px] md:w-[140px] md:h-[100px] p-3">
                  <img
                    src={item.clientLogo.url}
                    className="w-full h-full object-contain mix-blend-multiply"
                    alt="client logo"
                  />
                </div>
              </div>
            ))}
          {isPending &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <LogoShimmer key={item} />)}
        </div>
      </Wrappper>
    </div>
  );
};

export default ClientSection;
