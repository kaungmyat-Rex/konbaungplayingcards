"use client";
import React from "react";
import ten from "../../../public/charatorImg/10.svg";
import Image from "next/image";
import exploreone from "../../../public/10explore1.svg";
import exploretwo from "../../../public/10explore2.svg";
import explorethree from "../../../public/10explore3.svg";
import explorefour from "../../../public/10explore4.svg";
interface TenProps {
  refTen: React.RefObject<HTMLDivElement | null>;
}

const Ten = ({ refTen }: TenProps) => {
  return (
    <div
      id="ten"
      ref={refTen}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      {/* <div
            className="block md:hidden"
            style={{
              backgroundImage: `url('/charatorImg/${character}.svg')`,
              height: "100vh",
              backgroundAttachment: "fixed",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
      {/* <Image
            src={Ten}
            alt="Ten"
            className="w-full h-screen object-contain sticky top-0 -z-[1]"
            width={800}
            height={800}
          /> */}
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative -mt-10 md:-mt-0 gap-y-5">
          <Image
            src={ten}
            alt="Ten"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-left absolute -bottom-15 left-10 font-SourceSerif hidden md:block">
            10 . Minister of Tax
          </h4>
        </div>
      </div>

      <div className="flex-[5] relative p-5 rounded-lg border-2 border-white backdrop-blur-lg ">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[140px] left-0 font-SourceSerif md:hidden">
          10 . Minister of Tax
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
            Civil and Military court costumes awarded to ministerof taxes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image className="w-[200px]" src={exploretwo} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Manuscripts made from palm leaves.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Burma 1 kyat coin during 1852 King Mindon.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-x-5  gap-y-5 py-7">
          <Image className="w-[200px]" src={explorefour} alt="qqp" />
          <p
            className="text-white text-justify text-base font-medium font-Nunito
            "
          >
            Monasteries and monks were exempt from the Thathameda tax, meaning
            they didn’t have to pay like ordinary citizens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ten;
