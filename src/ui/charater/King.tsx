"use client";
import React from "react";
import king from "../../../public/charatorImg/king.svg";
import Image from "next/image";
import kingphotoone from "../../../public/Kexplore1.svg";
import kingphototwo from "../../../public/Kexplore2.svg";
import kingphotothree from "../../../public/Kexplore3.svg";
import kingphotofour from "../../../public/Kexplore4.svg";
import kingphotofive from "../../../public/Kexplore5.svg";

interface KingProps {
  refKing?: React.RefObject<HTMLDivElement | null>;
}

const King = ({ refKing }: KingProps) => {
  return (
    <div
      id="king"
      ref={refKing}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative">
          <Image
            src={king}
            alt="king"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-center absolute bottom-0 left-10 font-SourceSerif hidden md:block">
            King
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[120px] left-0 font-SourceSerif md:hidden">
          King
        </h4>
        <h4 className="text-white font-bold text-2xl text-center mb-5">
          Do you know?
        </h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={kingphotoone} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            King Thibaw (1878-1885) was the final monarch before the British
            took over, marking the end of Burmese monarchy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image className="w-[200px]" src={kingphototwo} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito 
            "
          >
            Royal Artist Saya Chone's "King Thibaw Leaving Mandalay"
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={kingphotothree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            After the Third Anglo-Burmese War in 1885, He was captured and
            exiled to Ratnagiri, India, where he lived under house arrest for
            the rest of his life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-x-5  gap-y-5 py-7">
          <Image className="w-[200px]" src={kingphotofour} alt="qqp" />
          <p
            className="text-white text-right text-base font-medium font-Nunito
            "
          >
            The Thamyee Yat is held by kings during coronation ceremony, it is
            one of the five divine regalia of Burmese royalty.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={kingphotofive} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            The Thamyee Yat is crafted from the tailbone of the mythical animal
            Sa-ma-ri (Wild Yak)— symbolizing power, purity, and legitimacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default King;
