"use client";
import MainCardSwiper from "@/ui/MainCardSwiper";
import Image from "next/image";
import mandalayImg from "../../public/mandalay.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import CharatorList from "@/ui/CharatorList";
import React from "react";
import Shop from "@/ui/Shop";

export default function Home() {
  const mainref = React.useRef<HTMLDivElement>(null);

  // snap-y snap-mandatory --main tag
  // snap-end -- home and contact page tag
  return (
    <main ref={mainref} className="h-screen overflow-y-scroll scroll-smooth">
      <section
        id="home"
        className="w-full h-screen flex justify-center items-center px-0 md:px-20 pt-10 overflow-x-hidden"
      >
        <MainCardSwiper />
      </section>
      <Shop />

      <CharatorList mainref={mainref} />

      <section id="contact" className="w-full h-full">
        <div className="relative w-full h-[500px]">
          <Image
            src={mandalayImg}
            alt="mandalay"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
          <h4 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-Montserrat font-semibold text-4xl md:text-5xl whitespace-nowrap">
            Contact Me
          </h4>
        </div>
        <div className="flex justify-center items-start md:items-center ml-8 md:ml-0 -mt-10 md:mt-10 px-5 md:px-30 gap-x-10 md:gap-x-20">
          <div className="flex flex-col justify-center items-center md:gap-y-10 gap-y-[60px] md:flex-row md:gap-x-28">
            <div className="flex flex-col justify-center items-center gap-y-1 ">
              <CgProfile color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                CREATOR
              </p>
              <p className="text-white font-Nunito font-normal text-sm whitespace-nowrap">
                Han Win Htet
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1">
              <FaLocationDot color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                ADDRESS
              </p>
              <p className="text-white font-Nunito font-normal text-sm whitespace-nowrap">
                Bangkok / Thailand
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-10 md:flex-row md:gap-x-28">
            <div className="flex flex-col justify-center items-center gap-y-1">
              <SiGmail color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                EMAIL
              </p>
              <Link
                href="mailto:thisishanwinhtet@gmail.com"
                className="text-white font-Nunito font-normal text-sm wrap-break-word w-[68%] md:w-[100%]"
              >
                thisishanwinhtet@gmail.com
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1">
              <FaSquareInstagram color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                INSTAGRAM
              </p>
              <Link
                href="https://www.instagram.com/hansolo_2023/"
                target="_blank"
                className="text-white font-Nunito font-normal text-sm"
              >
                hansolo_2023
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
