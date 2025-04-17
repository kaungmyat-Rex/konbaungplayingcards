import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import "./swiper.css";
import Header from "@/ui/layout/Header";
import localFont from "next/font/local";

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
const NunitoPrimary = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const MontserratHeader = Montserrat({
  variable: "--font-montserrat",
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
        className={`${NunitoPrimary.variable} ${MontserratHeader.variable} ${burma.variable} ${burmaBold.variable} antialiased relative`}
      >
        <div className="bodyMain"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
