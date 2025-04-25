"use client";
import React from "react";
import ace from "../../../public/charatorImg/Ace.svg";
import Image from "next/image";
import exploreone from "../../../public/Aexplore1.svg";
import exploretwo from "../../../public/Aexplore2.svg";
import explorethree from "../../../public/Aexplore3.svg";

interface AceProps {
  refAce?: React.RefObject<HTMLDivElement | null>;
}

const Ace = ({ refAce }: AceProps) => {
  return (
    <div
      id="ace"
      ref={refAce}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative -mt-10 md:-mt-0 gap-y-5">
          <Image
            src={ace}
            alt="Ace"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-left absolute -bottom-15 left-10 font-SourceSerif hidden md:block">
            Ace
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[140px] left-0 font-SourceSerif md:hidden">
          Ace
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
            The original Lion Throne at the National Museum in Yangon
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image
            className="w-[200px] h-[200px] object-contain"
            src={exploretwo}
            alt="qqp"
          />
          <p
            className="text-white text-right text-base font-medium font-Nunito
            "
          >
            King Thibaw and Queen Supayalat on the Lion Throne at Mandalay
            Palace
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            After King Thibaw was dethroned in 1885, the Lion Throne was taken
            by the British to India in 1902. After Burma regained independence
            on January 4, 1948, it was returned by Lord Mountbatten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ace;
