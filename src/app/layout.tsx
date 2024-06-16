import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/Footer";

// const ttWellingtonsFont = localFont({
//   variable: "--font-tt-wellingtons",
//   src: [
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialThin.oft",
//       weight: "100",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialExtraLight.oft",
//       weight: "200",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialLight.oft",
//       weight: "300",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialRegular.oft",
//       weight: "400",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialMedium.oft",
//       weight: "500",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialSemiBold.oft",
//       weight: "600",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialBold.oft",
//       weight: "700",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialExtraBold.oft",
//       weight: "800",
//     },
//     {
//       path: "./fonts/tt_wellingtons/TTWellingtonsTrialBlack.oft",
//       weight: "900",
//     },
//   ],
// });

export const metadata: Metadata = {
  title: {
    default: "Aara Tech",
    template: "%s | Aara Tech",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
