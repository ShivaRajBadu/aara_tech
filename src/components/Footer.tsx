import React from "react";
import Wrappper from "./Wrappper";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative bg-background text-foreground py-24 overflow-hidden">
      <Image
        src="/icons/footer_bg.svg"
        width={300}
        height={300}
        alt="footer_bg"
        className="absolute top-8 left-[8%]"
      />
      <Wrappper>
        <div className="flex flex-col gap-20 md:gap-0 md:flex-row justify-between">
          <div className="w-full md:w-[40%] ">
            <Image width={200} height={56} src="/icons/logo.svg" alt="logo" />
            <p className="text-lg text-balance font-medium opacity-80 py-6">
              Lorem ipsum dolor sit amet consectetur. Et vivamus leo vitae
              curabitur ultrices. Non ac orci diam arcu. Elit felis maecenas
              rutrum faucibus aliquet et a.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-20 ">
            <div>
              <h5 className="text-foreground/80 text-sm font-normal">SOCIAL</h5>
              <ul className="space-y-4 mt-4">
                <li>
                  <Link
                    href={"https://www.facebook.com"}
                    prefetch={false}
                    target="_blank"
                    className="text-lg font-medium"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://wa.me/919999999999"}
                    prefetch={false}
                    target="_blank"
                    className="text-lg font-medium"
                  >
                    Whatsapp
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.linkedin.com"}
                    prefetch={false}
                    target="_blank"
                    className="text-lg font-medium"
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.instagram.com"}
                    prefetch={false}
                    target="_blank"
                    className="text-lg font-medium"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-foreground/80 text-sm font-normal">
                CONTACT INFO
              </h5>
              <ul className="space-y-4 mt-4">
                <li className="flex gap-2 items-center ">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.54 22.851L11.61 22.891L11.638 22.907C11.749 22.967 11.8733 22.9985 11.9995 22.9985C12.1257 22.9985 12.25 22.967 12.361 22.907L12.389 22.892L12.46 22.851C12.8511 22.6191 13.2328 22.3716 13.604 22.109C14.5651 21.4305 15.463 20.6667 16.287 19.827C18.231 17.837 20.25 14.847 20.25 11C20.25 8.81196 19.3808 6.71354 17.8336 5.16637C16.2865 3.61919 14.188 2.75 12 2.75C9.81196 2.75 7.71354 3.61919 6.16637 5.16637C4.61919 6.71354 3.75 8.81196 3.75 11C3.75 14.846 5.77 17.837 7.713 19.827C8.53664 20.6667 9.43427 21.4304 10.395 22.109C10.7666 22.3716 11.1485 22.6191 11.54 22.851ZM12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-lg font-medium">
                    Halgadha, Itahari, Nepal
                  </p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 5C1.5 4.20435 1.81607 3.44129 2.37868 2.87868C2.94129 2.31607 3.70435 2 4.5 2H5.872C6.732 2 7.482 2.586 7.691 3.42L8.796 7.843C8.88554 8.201 8.86746 8.57746 8.74401 8.92522C8.62055 9.27299 8.39723 9.57659 8.102 9.798L6.809 10.768C6.674 10.869 6.645 11.017 6.683 11.12C7.24738 12.6549 8.1386 14.0487 9.29495 15.2051C10.4513 16.3614 11.8451 17.2526 13.38 17.817C13.483 17.855 13.63 17.826 13.732 17.691L14.702 16.398C14.9234 16.1028 15.227 15.8794 15.5748 15.756C15.9225 15.6325 16.299 15.6145 16.657 15.704L21.08 16.809C21.914 17.018 22.5 17.768 22.5 18.629V20C22.5 20.7956 22.1839 21.5587 21.6213 22.1213C21.0587 22.6839 20.2956 23 19.5 23H17.25C8.552 23 1.5 15.948 1.5 7.25V5Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-lg font-medium">981-7396487</p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 9.16992V17.7499C1.5 18.5456 1.81607 19.3086 2.37868 19.8712C2.94129 20.4339 3.70435 20.7499 4.5 20.7499H19.5C20.2956 20.7499 21.0587 20.4339 21.6213 19.8712C22.1839 19.3086 22.5 18.5456 22.5 17.7499V9.16992L13.572 14.6629C13.0992 14.9538 12.5551 15.1078 12 15.1078C11.4449 15.1078 10.9008 14.9538 10.428 14.6629L1.5 9.16992Z"
                      fill="white"
                    />
                    <path
                      d="M22.5 7.408V7.25C22.5 6.45435 22.1839 5.69129 21.6213 5.12868C21.0587 4.56607 20.2956 4.25 19.5 4.25H4.5C3.70435 4.25 2.94129 4.56607 2.37868 5.12868C1.81607 5.69129 1.5 6.45435 1.5 7.25V7.408L11.214 13.386C11.4504 13.5314 11.7225 13.6084 12 13.6084C12.2775 13.6084 12.5496 13.5314 12.786 13.386L22.5 7.408Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-lg font-medium">ara80fficial@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default Footer;
