"use client";
import React from "react";
import three from "../../../public/charatorImg/3.svg";
import Image from "next/image";
import exploreone from "../../../public/3explore1.svg";
import exploretwo from "../../../public/3explore2.svg";
import explorethree from "../../../public/3explore3.svg";

interface ThreeProps {
  refThree: React.RefObject<HTMLDivElement | null>;
}

const Three = ({ refThree }: ThreeProps) => {
  return (
    <div
      id="three"
      ref={refThree}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative -mt-10 md:-mt-0 gap-y-5">
          <Image
            src={three}
            alt="Three"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-left absolute -bottom-15 left-10 font-SourceSerif hidden md:block">
            3 . Provincial Governor
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[140px] left-0 font-SourceSerif md:hidden">
          3 . Provincial Governor
        </h4>
        <h4 className="text-white font-bold text-2xl text-center mb-5">
          Do you know?
        </h4>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image
            className="w-[200px] h-[300px] object-cover"
            src={exploreone}
            alt="qqp"
          />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Court military costumes and special fabric awarded to Provincial
            governors
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image
            className="w-[200px] h-[200px] object-contain"
            src={exploretwo}
            alt="qqp"
          />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Konbaung-era warriors on horse, with swords and spears, traditional
            cavalry gear from the Laung Oo Maw murals.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            The Burmese spear, called hlan, was widely used in the 19th century
            for combat and as a thrown weapon. Ornate silver-inlaid versions
            signified rank and were carried by officers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Three;
