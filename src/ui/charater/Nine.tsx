"use client";
import React from "react";
import nine from "../../../public/charatorImg/9.svg";
import Image from "next/image";
import exploreone from "../../../public/9explore1.svg";
import exploretwo from "../../../public/9explore2.svg";
import explorethree from "../../../public/9explore3.svg";
import explorefour from "../../../public/9explore4.svg";
interface NineProps {
  refNine: React.RefObject<HTMLDivElement | null>;
}

const Nine = ({ refNine }: NineProps) => {
  return (
    <div
      id="nine"
      ref={refNine}
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
            src={Nine}
            alt="Nine"
            className="w-full h-screen object-contain sticky top-0 -z-[1]"
            width={800}
            height={800}
          /> */}
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative">
          <Image
            src={nine}
            alt="Nine"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-center absolute bottom-0 left-10 font-SourceSerif hidden md:block">
            9 . King's Secretary
          </h4>
        </div>
      </div>

      <div className="flex-[7] relative bg-white p-5 rounded-lg">
        <h4 className="text-white font-bold text-5xl my-14 text-center absolute -top-[160px] left-0 font-SourceSerif md:hidden">
          9 . King's Secretary
        </h4>
        <h4 className="text-black text-center text-2xl font-extrabold font-Nunito mb-5">
          Royal appearances both right and left sides of the king
        </h4>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={exploreone} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
          "
          >
            Betel cup based on dragon statue
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-x-5 gap-y-5 py-7">
          <Image className="w-[200px]" src={exploretwo} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
          "
          >
            Betel container
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-5 gap-y-5">
          <Image className="w-[200px]" src={explorethree} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
          "
          >
            Long-necked pot
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-x-5  gap-y-5 py-7">
          <Image className="w-[200px]" src={explorefour} alt="qqp" />
          <p
            className="text-black text-justify text-base font-medium font-Nunito
          "
          >
            Long boat-shaped betel container
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nine;
