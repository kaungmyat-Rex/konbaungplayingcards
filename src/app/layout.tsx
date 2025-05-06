import type { Metadata } from "next";
import { Montserrat, Nunito, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "./swiper.css";
import Header from "@/ui/layout/Header";
import localFont from "next/font/local";
import { ActiveSectionProvider } from "@/context/activeSection";
import Image from "next/image";
import leftKanot from "../../public/kanote_left.svg";
import rightKanot from "../../public/kanote_right.svg";
const burma = localFont({
  src: "../../public/fonts/BurmaRegular.ttf",
  display: "swap",
  variable: "--font-burma",
});

const burmaBold = localFont({
  src: "../../public/fonts/BurmaBold.ttf",
  display: "swap",
  variable: "--font-burmaBold",
});

const elephant = localFont({
  src: "../../public/fonts/ElephantRegular.ttf",
  display: "swap",
  variable: "--font-elephant",
});

const NunitoPrimary = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const MontserratHeader = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const SourceSerif = Source_Serif_4({
  variable: "--font-sourceSerif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konbaung Playing cards",
  description:
    "Step into the world of the Konbaung Dynasty with this unique deck of illustrated playing cards. Each deck represents a royal rank, inspired by authentic 19th century Burmese manuscript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NunitoPrimary.variable} ${MontserratHeader.variable} ${burma.variable} ${burmaBold.variable} ${SourceSerif.variable} ${elephant.variable} antialiased relative`}
      >
        <ActiveSectionProvider>
          <div className="bodyMain">
            <Image
              src={leftKanot}
              alt="Lkanot"
              className="absolute left-0 top-[78px] w-[170px] opacity-20 -z-10"
              objectFit="contain"
            />
            <Image
              src={rightKanot}
              alt="Rkanot"
              className="absolute right-0 bottom-0 w-[170px] opacity-20 -z-10"
              objectFit="contain"
            />
            <Image
              src={leftKanot}
              alt="Lkanot"
              className="absolute right-0 top-[78px] w-[170px] opacity-20 -z-10 rotate-[90deg]"
              objectFit="contain"
            />
            <Image
              src={rightKanot}
              alt="Rkanot"
              className="absolute left-0 bottom-0 w-[170px] opacity-20 -z-10 rotate-[90deg]"
              objectFit="contain"
            />
          </div>
          <Header />

          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
