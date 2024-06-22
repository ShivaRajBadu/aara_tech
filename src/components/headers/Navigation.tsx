import React from "react";

import Wrappper from "../Wrappper";
import Link from "next/link";

const Navigation = () => {
  return (
    <Wrappper>
      <div className="relative z-10 flex items-center justify-between py-6">
        <div>
          <img
            src="/icons/logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="h-[36px] w-[130px]"
          />
        </div>
        <Link
          className=" hover:scale-[1.03] duration-300 ease-linear hidden sm:block rounded-[8px] bg-primary text-foreground px-6 py-2 text-base font-semibold"
          href="https://wa.me/919999999999"
        >
          Chat With Us on WhatsApp
        </Link>
      </div>
    </Wrappper>
  );
};

export default Navigation;
