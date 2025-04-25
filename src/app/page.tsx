"use client";
import MainCardSwiper from "@/ui/MainCardSwiper";
import Image from "next/image";
import mandalayImg from "../../public/mandalay.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Shop from "@/ui/Shop";
import { useActiveSection } from "@/context/activeSection";
import King from "@/ui/charater/King";
import Queen from "@/ui/charater/Queen";
import Jack from "@/ui/charater/Jack";
import Ace from "@/ui/charater/Ace";
import Ten from "@/ui/charater/Ten";
import Nine from "@/ui/charater/Nine";
import Eight from "@/ui/charater/Eight";
import Seven from "@/ui/charater/Seven";
import Six from "@/ui/charater/Six";
import Five from "@/ui/charater/Five";
import Four from "@/ui/charater/Four";
import Three from "@/ui/charater/Three";
import Two from "@/ui/charater/Two";
import { CARDS } from "@/constants/cardmenu";
import leftKanot from "../../public/left corner kanote.svg";
import rightKanot from "../../public/right corner kanote.svg";

export default function Home() {
  // menu ref group
  const mainref = React.useRef<HTMLDivElement>(null);
  const homeref = React.useRef<HTMLDivElement>(null);
  const shopref = React.useRef<HTMLDivElement>(null);
  const contactref = React.useRef<HTMLDivElement>(null);

  // charator ref group
  const refKing = useRef<HTMLDivElement>(null);
  const refQueen = useRef<HTMLDivElement>(null);
  const refJack = useRef<HTMLDivElement>(null);
  const refTen = useRef<HTMLDivElement>(null);
  const refNine = useRef<HTMLDivElement>(null);
  const refEight = useRef<HTMLDivElement>(null);
  const refSeven = useRef<HTMLDivElement>(null);
  const refSix = useRef<HTMLDivElement>(null);
  const refFive = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refAce = useRef<HTMLDivElement>(null);

  const [activeModal, setActiveModal] = React.useState<boolean>(false);
  const [activeId, setActiveId] = React.useState<number>(0);
  const [activeFirstSlide, setActiveFirstSlide] = React.useState<number>(0);
  const [activeSecondSlide, setActiveSecondSlide] = React.useState<number>(0);
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const scrollEl = mainref?.current;
    const handleScroll = () => {
      const homeDiv = homeref.current?.offsetTop ?? 0;
      const shopDiv = shopref.current?.offsetTop ?? 0;
      const exploreDiv = (refKing.current?.offsetTop ?? 0) - 300; // use kingref instead of exploreref
      const contactDiv = (contactref.current?.offsetTop ?? 0) - 500;
      const scrollPosition = Math.floor(mainref?.current?.scrollTop ?? 0);

      if (scrollPosition >= homeDiv && scrollPosition < shopDiv) {
        setActiveSection("home");
        setActiveModal(false);
      } else if (scrollPosition >= shopDiv && scrollPosition < exploreDiv) {
        setActiveSection("shop");
        setActiveModal(false);
      } else if (scrollPosition >= exploreDiv && scrollPosition < contactDiv) {
        setActiveSection("explore");
        setActiveModal(true);
      } else if (scrollPosition >= contactDiv) {
        setActiveModal(false);
        setActiveSection("contact");
      } else {
        setActiveModal(false);
        setActiveSection("home");
      }
    };
    if (!scrollEl) return;

    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollEl = mainref?.current;
    const handleScroll = () => {
      const kingDiv = (refKing.current?.offsetTop ?? 0) - 300;
      const queenDiv = (refQueen.current?.offsetTop ?? 0) - 300;

      const JackDiv = (refJack.current?.offsetTop ?? 0) - 300;
      const TenDiv = (refTen.current?.offsetTop ?? 0) - 300;
      const nineDiv = (refNine.current?.offsetTop ?? 0) - 300;
      const eightDiv = (refEight.current?.offsetTop ?? 0) - 300;
      const sevenDiv = (refSeven.current?.offsetTop ?? 0) - 300;
      const sixDiv = (refSix.current?.offsetTop ?? 0) - 300;
      const fiveDiv = (refFive.current?.offsetTop ?? 0) - 300;
      const fourDiv = (refFour.current?.offsetTop ?? 0) - 300;
      const threeDiv = (refThree.current?.offsetTop ?? 0) - 300;
      const twoDiv = (refTwo.current?.offsetTop ?? 0) - 300;
      const aceDiv = (refAce.current?.offsetTop ?? 0) - 300;

      const scrollPosition = Math.floor(mainref?.current?.scrollTop ?? 0);

      if (scrollPosition >= kingDiv && scrollPosition < queenDiv) {
        setActiveFirstSlide(0);
        setActiveSecondSlide(5);
        setActiveId(0);
      } else if (scrollPosition >= queenDiv && scrollPosition < JackDiv) {
        setActiveFirstSlide(0);
        setActiveSecondSlide(5);
        setActiveId(1);
      } else if (scrollPosition >= JackDiv && scrollPosition < TenDiv) {
        setActiveFirstSlide(0);
        setActiveSecondSlide(5);
        setActiveId(2);
      } else if (scrollPosition >= TenDiv && scrollPosition < nineDiv) {
        setActiveFirstSlide(0);
        setActiveSecondSlide(5);
        setActiveId(3);
      } else if (scrollPosition >= nineDiv && scrollPosition < eightDiv) {
        setActiveFirstSlide(0);
        setActiveSecondSlide(5);
        setActiveId(4);
      } else if (scrollPosition >= eightDiv && scrollPosition < sevenDiv) {
        setActiveFirstSlide(5);
        setActiveSecondSlide(10);
        setActiveId(5);
      } else if (scrollPosition >= sevenDiv && scrollPosition < sixDiv) {
        setActiveFirstSlide(5);
        setActiveSecondSlide(10);
        setActiveId(6);
      } else if (scrollPosition >= sixDiv && scrollPosition < fiveDiv) {
        setActiveFirstSlide(5);
        setActiveSecondSlide(10);
        setActiveId(7);
      } else if (scrollPosition >= fiveDiv && scrollPosition < fourDiv) {
        setActiveFirstSlide(5);
        setActiveSecondSlide(10);
        setActiveId(8);
      } else if (scrollPosition >= fourDiv && scrollPosition < threeDiv) {
        setActiveFirstSlide(5);
        setActiveSecondSlide(10);
        setActiveId(9);
      } else if (scrollPosition >= threeDiv && scrollPosition < twoDiv) {
        setActiveFirstSlide(10);
        setActiveSecondSlide(13);
        setActiveId(10);
      } else if (scrollPosition >= twoDiv && scrollPosition < aceDiv) {
        setActiveFirstSlide(10);
        setActiveSecondSlide(13);
        setActiveId(11);
      } else if (scrollPosition >= aceDiv) {
        setActiveFirstSlide(10);
        setActiveSecondSlide(13);
        setActiveId(12);
      } else {
        setActiveFirstSlide(10);
        setActiveSecondSlide(13);
        setActiveId(12);
      }
    };
    if (!scrollEl) return;

    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [mainref]);

  const nextActiveSlide = () => {
    if (activeFirstSlide === 0) {
      setActiveFirstSlide(5);
      setActiveSecondSlide(10);
    } else if (activeFirstSlide === 5) {
      setActiveFirstSlide(10);
      setActiveSecondSlide(13);
    } else {
      setActiveFirstSlide(0);
      setActiveSecondSlide(5);
    }
  };

  const prevActiveSlide = () => {
    if (activeFirstSlide === 10) {
      setActiveFirstSlide(5);
      setActiveSecondSlide(10);
    } else if (activeFirstSlide === 5) {
      setActiveFirstSlide(0);
      setActiveSecondSlide(5);
    } else {
      setActiveFirstSlide(10);
      setActiveSecondSlide(13);
    }
  };

  return (
    <main ref={mainref} className="h-screen overflow-y-scroll scroll-smooth">
      <section
        ref={homeref}
        id="home"
        className="w-full h-screen flex justify-center items-center px-0 md:px-20 pt-10 overflow-x-hidden"
      >
        <MainCardSwiper />
      </section>
      <section id="shop" ref={shopref}>
        <Shop />
      </section>
      <section ref={refKing} className="w-full h-auto px-5 md:px-20 relative">
        <King />
      </section>
      <section ref={refQueen} className="w-full h-auto px-5 md:px-20 relative">
        <Queen />
      </section>
      <section ref={refJack} className="w-full h-auto px-5 md:px-20 relative">
        <Jack />
      </section>
      <section ref={refTen} className="w-full h-auto px-5 md:px-20 relative">
        <Ten />
      </section>
      <section ref={refNine} className="w-full h-auto px-5 md:px-20 relative">
        <Nine />
      </section>
      <section ref={refEight} className="w-full h-auto px-5 md:px-20 relative">
        <Eight />
      </section>
      <section ref={refSeven} className="w-full h-auto px-5 md:px-20 relative">
        <Seven />
      </section>
      <section ref={refSix} className="w-full h-auto px-5 md:px-20 relative">
        <Six />
      </section>
      <section ref={refFive} className="w-full h-auto px-5 md:px-20 relative">
        <Five />
      </section>
      <section ref={refFour} className="w-full h-auto px-5 md:px-20 relative">
        <Four />
      </section>
      <section ref={refThree} className="w-full h-auto px-5 md:px-20 relative">
        <Three />
      </section>
      <section ref={refTwo} className="w-full h-auto px-5 md:px-20 relative">
        <Two />
      </section>
      <section ref={refAce} className="w-full h-auto px-5 md:px-20 relative">
        <Ace />
      </section>
      {activeModal && (
        <div className="fixed max-w-[250px] w-full bottom-[20px] left-[50%] -translate-x-[50%] border border-white rounded-lg backdrop-blur-lg p-3 z-30 ">
          <div className="flex justify-center items-center relative">
            <Image
              onClick={() => prevActiveSlide()}
              src={leftKanot}
              alt="Lkanot"
              className="rotate-45 absolute -left-[46px] w-[50px] -top-[3px] z-30 cursor-pointer"
            />
            <Image
              onClick={() => nextActiveSlide()}
              src={rightKanot}
              alt="Rkanot"
              className="rotate-45 absolute -right-[46px] w-[50px] -top-[8px] z-30 cursor-pointer"
            />
            {CARDS.slice(activeFirstSlide, activeSecondSlide).map((card) => {
              return (
                <div
                  key={card.id}
                  className={`border-r border-white w-[20%] text-center last:border-r-0`}
                >
                  <Link
                    href={card.path}
                    className={`${
                      activeId === card.id
                        ? "text-white font-extrabold text-[20px]"
                        : "text-white/50 text-[17px] font-normal"
                    } font-Nunito`}
                  >
                    {card.card}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <section ref={contactref} id="contact" className="w-full h-full">
        <div className="relative w-full h-[500px]">
          <Image
            src={mandalayImg}
            alt="mandalay"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
          <h4 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-Montserrat font-semibold text-4xl md:text-5xl whitespace-nowrap">
            Contact Me
          </h4>
        </div>
        <div className="flex justify-center items-start md:items-center ml-8 md:ml-0 -mt-10 md:mt-10 px-5 md:px-30 gap-x-10 md:gap-x-20">
          <div className="flex flex-col justify-center items-center md:gap-y-10 gap-y-[60px] md:flex-row md:gap-x-28">
            <div className="flex flex-col justify-center items-center gap-y-1 ">
              <CgProfile color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                CREATOR
              </p>
              <p className="text-white font-Nunito font-normal text-sm whitespace-nowrap">
                Han Win Htet
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1">
              <FaLocationDot color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                ADDRESS
              </p>
              <p className="text-white font-Nunito font-normal text-sm whitespace-nowrap">
                Bangkok / Thailand
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-10 md:flex-row md:gap-x-28">
            <div className="flex flex-col justify-center items-center gap-y-1">
              <SiGmail color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                EMAIL
              </p>
              <Link
                href="mailto:thisishanwinhtet@gmail.com"
                className="text-white font-Nunito font-normal text-sm wrap-break-word w-[68%] md:w-[100%]"
              >
                thisishanwinhtet@gmail.com
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1">
              <FaSquareInstagram color="white" className="text-xl" />
              <p className="font-SourceSerif text-white font-semibold text-base md:text-lg">
                INSTAGRAM
              </p>
              <Link
                href="https://www.instagram.com/hansolo_2023/"
                target="_blank"
                className="text-white font-Nunito font-normal text-sm"
              >
                hansolo_2023
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center py-2 relative">
        <p className="text-white/75 font-Nunito font-normal text-sm md:text-sm">
          ©2025 konbaungplayingcards. All rights reserved.
        </p>
        <span className="text-white/75 font-Nunito font-normal text-sm md:text-sm absolute md:right-2 md:bottom-2 bottom-8 right-0 md:left-0 md:-translate-x-0 left-[50%] -translate-x-[50%]">
          Developed by{" "}
          <Link target="_blank" href={"https://kgmyat.vercel.app/"}>
            kgmyat
          </Link>
        </span>
      </section>
    </main>
  );
}
