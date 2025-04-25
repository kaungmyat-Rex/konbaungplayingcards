"use client";
import React from "react";
import two from "../../../public/charatorImg/2.svg";
import Image from "next/image";
import exploreone from "../../../public/2explore1.svg";
import exploretwo from "../../../public/2explore2.svg";
import explorethree from "../../../public/2explore3.svg";

interface TwoProps {
  refTwo: React.RefObject<HTMLDivElement | null>;
}

const Two = ({ refTwo }: TwoProps) => {
  return (
    <div
      id="two"
      ref={refTwo}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative -mt-10 md:-mt-0 gap-y-5">
          <Image
            src={two}
            alt="Two"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-left absolute -bottom-15 left-10 font-SourceSerif hidden md:block">
            2 . Lord Chamberlain
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[140px] left-0 font-SourceSerif md:hidden">
          2 . Lord Chamberlain
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
            Uniform awarded to Lord Chamberlain
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
            Konbaung Dynasty warriors holding shields, as seen in the murals of
            Laung Oo Maw Library.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Laung Oo Maw Library Year of construction - early Konbaung period
          </p>
        </div>
      </div>
    </div>
  );
};

export default Two;
