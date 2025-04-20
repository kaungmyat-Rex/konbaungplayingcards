import MainCardSwiper from "@/ui/MainCardSwiper";
import Image from "next/image";
import mandalayImg from "../../public/mandalay.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section
        id="home"
        className="w-full h-screen flex justify-center items-center px-0 md:px-20 pt-10 overflow-x-hidden snap-end"
      >
        <MainCardSwiper />
      </section>
      <section id="contact" className="w-full h-screen snap-end ">
        <div className="relative w-full h-[500px]">
          <Image
            src={mandalayImg}
            alt="mandalay"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
          <h4 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-Montserrat font-semibold text-4xl md:text-5xl">
            Contact Me
          </h4>
        </div>
        <div className="flex justify-center items-center -mt-10 md:mt-10 md:px-30 gap-x-10 md:gap-x-20">
          <div className="flex flex-col justify-center items-center gap-y-10 md:flex-row md:gap-x-28">
            <div className="flex flex-col justify-center items-center gap-y-1 ">
              <CgProfile size={40} color="white" />
              <p className="font-SourceSerif text-white font-semibold text-lg">
                CREATOR
              </p>
              <p className="text-white font-Nunito font-normal text-base whitespace-nowrap">
                Han Win Htet
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1">
              <FaLocationDot size={40} color="white" />
              <p className="font-SourceSerif text-white font-semibold text-lg">
                ADDRESS
              </p>
              <p className="text-white font-Nunito font-normal text-base whitespace-nowrap">
                Bangkok / Thailand
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-10 md:flex-row md:gap-x-28">
            <div className="flex flex-col justify-center items-center gap-y-1">
              <SiGmail size={40} color="white" />
              <p className="font-SourceSerif text-white font-semibold text-lg">
                EMAIL
              </p>
              <p className="text-white font-Nunito font-normal text-base">
                thisishanwinhtet@gmail.com
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1">
              <FaSquareInstagram size={40} color="white" />
              <p className="font-SourceSerif text-white font-semibold text-lg">
                INSTAGRAM
              </p>
              <p className="text-white font-Nunito font-normal text-base">
                hansolo_2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
