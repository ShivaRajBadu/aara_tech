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
            width={130}
            height={36}
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
