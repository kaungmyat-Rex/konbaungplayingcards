"use client";
import React from "react";
import eight from "../../../public/charatorImg/8.svg";
import Image from "next/image";
import exploreone from "../../../public/8explore1.svg";
import exploretwo from "../../../public/8explore2.svg";
import explorethree from "../../../public/8explore3.svg";
import explorefour from "../../../public/8explore4.svg";
interface EightProps {
  refEight?: React.RefObject<HTMLDivElement | null>;
}

const Eight = ({ refEight }: EightProps) => {
  return (
    <div
      id="eight"
      ref={refEight}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative -mt-10 md:-mt-0 gap-y-5">
          <Image
            src={eight}
            alt="Eight"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-left absolute -bottom-15 left-10 font-SourceSerif hidden md:block">
            8 . Queen's Chamberlain
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[140px] left-0 font-SourceSerif md:hidden">
          8 . Queen's Chamberlain
        </h4>
        <h4 className="text-white font-bold text-2xl text-center mb-5">
          Do you know?
        </h4>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={exploreone} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Costume awarded to Queen’s chamberlain by the king
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image className="w-[200px]" src={exploretwo} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            In the Burmese royal court, fans were not just for cooling down,
            they were also symbols of status, and authority.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            A Royal Officer holding a Large ceremonial fan.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-x-5  gap-y-5 py-7">
          <Image className="w-[200px]" src={explorefour} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Burmese royal fans were made from luxurious materials such as
            peacock feathers, silk, bamboo, palm leaves, and gold.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eight;
