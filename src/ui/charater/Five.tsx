"use client";
import React from "react";
import five from "../../../public/charatorImg/5.svg";
import Image from "next/image";
import exploreone from "../../../public/5explore1.svg";
import exploretwo from "../../../public/5explore2.svg";
import explorethree from "../../../public/5explore3.svg";

interface FiveProps {
  refFive: React.RefObject<HTMLDivElement | null>;
}

const Five = ({ refFive }: FiveProps) => {
  return (
    <div
      id="five"
      ref={refFive}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative -mt-10 md:-mt-0 gap-y-5">
          <Image
            src={five}
            alt="Five"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-left absolute -bottom-15 left-10 font-SourceSerif hidden md:block">
            5 . Head of the Treasury
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[140px] left-0 font-SourceSerif md:hidden">
          5 . Head of the Treasury
        </h4>
        <h4 className="text-white font-bold text-2xl text-center mb-5">
          Do you know?
        </h4>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[150px]" src={exploreone} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Costume of head of the Cavalry and Treasury awarded by the king
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image className="w-[200px]" src={exploretwo} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            90% of the world's rubies came from Myanmar.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Imperial Crown of India – a special crown made in 1911 for George V
            to wear in Delhi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Five;
