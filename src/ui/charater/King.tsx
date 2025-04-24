"use client";
import React from "react";
import king from "../../../public/charatorImg/king.svg";
import Image from "next/image";
import queenphoto from "../../../public/Queenphoto1.svg";
interface KingProps {
  refKing: React.RefObject<HTMLDivElement | null>;
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

      <div className="flex-[7] relative p-5 rounded-lg">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[120px] left-0 font-SourceSerif md:hidden">
          King
        </h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5 bg-white p-3 rounded-lg">
          <Image className="w-[200px]" src={queenphoto} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
        "
          >
            Queen Supayalat (1859–1925) was the last queen of Myanmar, married
            to King Thibaw. She was known for her intelligence, political
            influence, and strong personality.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-x-5 gap-y-5 bg-white p-3 rounded-lg mt-3">
          <Image className="w-[200px]" src={queenphoto} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
        "
          >
            King Thibaw and Queen Supayalat
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={queenphoto} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
        "
          >
            Thazin flower (Bulbophyllum auricomum) is Myanmar’s royal flower,
            symbolizing grace, purity, and royalty. Traditionally worn by queens
            and princesses.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-x-5  gap-y-5 py-7">
          <Image className="w-[200px]" src={queenphoto} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
        "
          >
            Queen's Headwear and Necklace presented by a model
          </p>
        </div>
      </div>
    </div>
  );
};

export default King;
