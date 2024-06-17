import React from "react";

import Image from "next/image";
import Wrappper from "../Wrappper";
import Link from "next/link";

const Navigation = () => {
  return (
    <Wrappper>
      <div className="flex items-center justify-between py-6">
        <div>
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="h-[36px] w-[130px]"
            priority
          />
        </div>
        <Link
          className=" hidden sm:block rounded-[8px] bg-primary text-foreground px-6 py-2 text-base font-semibold"
          href="https://wa.me/919999999999"
        >
          Chat With Us on WhatsApp
        </Link>
      </div>
    </Wrappper>
  );
};

export default Navigation;
