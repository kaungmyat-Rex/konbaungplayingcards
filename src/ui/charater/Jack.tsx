"use client";
import React from "react";
import jack from "../../../public/charatorImg/Jack.svg";
import Image from "next/image";
import exploreone from "../../../public/Jexplore1.svg";
import exploretwo from "../../../public/Jexplore2.svg";
import explorethree from "../../../public/Jexplore3.svg";

interface JackProps {
  refJack: React.RefObject<HTMLDivElement | null>;
}

const Jack = ({ refJack }: JackProps) => {
  return (
    <div
      id="jack"
      ref={refJack}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative -mt-10 md:-mt-0 gap-y-5">
          <Image
            src={jack}
            alt="Jack"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-left absolute -bottom-15 left-10 font-SourceSerif hidden md:block">
            Jack
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[120px] left-0 font-SourceSerif md:hidden">
          Jack
        </h4>
        <h4 className="text-white font-bold text-2xl text-center mb-5">
          Do you know?
        </h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={exploreone} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Prince Kanaung (1820-1866), the Crown Prince, was a leading
            modernizer of Burma who aimed to strengthen the country by adopting
            Western military and industrial technologies. He established
            factories, foundries, and an arms workshop to modernize the Burmese
            military, an early effort at industrialization in Southeast Asia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image className="w-[200px]" src={exploretwo} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito 
            "
          >
            The Konbaung cannon factory, started by Prince Kanaung, used
            European technology to produce cannons, rifles, and ammunition,
            aiming to modernize Burma’s military before British colonization.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            The Konbaung coin factory, started by Prince Kanaung, was Burma’s
            first modern mint, producing coins with Burmese script using
            European technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jack;
