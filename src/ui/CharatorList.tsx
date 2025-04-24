"use client";
import React, { useCallback, useEffect, useRef } from "react";
import King from "./charater/King";
import Queen from "./charater/Queen";
import Jack from "./charater/Jack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CARDS } from "@/constants/cardmenu";
import { useRouter } from "next/navigation";
import Ace from "./charater/Ace";
import Ten from "./charater/Ten";
import Nine from "./charater/Nine";
import Eight from "./charater/Eight";
import Seven from "./charater/Seven";
import Six from "./charater/Six";
import Five from "./charater/Five";
interface mainrefProps {
  mainref: React.RefObject<HTMLDivElement | null>;
}
const CharatorList = ({ mainref }: mainrefProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const refKing = useRef<HTMLDivElement>(null);
  const refQueen = useRef<HTMLDivElement>(null);
  const refJack = useRef<HTMLDivElement>(null);
  const refTen = useRef<HTMLDivElement>(null);
  const refNine = useRef<HTMLDivElement>(null);
  const refEight = useRef<HTMLDivElement>(null);
  const refAce = useRef<HTMLDivElement>(null);
  const refSeven = useRef<HTMLDivElement>(null);
  const refSix = useRef<HTMLDivElement>(null);
  const refFive = useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    SlidersToScroll: 1,
    speed: 500,
  };
  const goToSlide = (index: any) => {
    sliderRef?.current?.slickGoTo(index);
  };

  useEffect(() => {
    const scrollEl = mainref?.current;
    const handleScroll = () => {
      const kingDiv = (refKing.current?.offsetTop ?? 0) + 1280;
      const queenDiv = (refQueen.current?.offsetTop ?? 0) + 1000;
      const JackDiv = (refJack.current?.offsetTop ?? 0) + 1000;
      const TenDiv = (refTen.current?.offsetTop ?? 0) + 1000;
      const nineDiv = (refNine.current?.offsetTop ?? 0) + 500;
      const scrollPosition = Math.floor(mainref?.current?.scrollTop ?? 0);

      if (scrollPosition >= kingDiv) {
        setOpen(true);
      } else {
        setOpen(false);
      }

      if (scrollPosition >= kingDiv && scrollPosition < queenDiv) {
        console.log("it trigger 1");
        // sliderRef?.current?.slickGoTo(0);
      } else if (scrollPosition >= queenDiv && scrollPosition < JackDiv) {
        console.log("it trigger 2");
        // sliderRef?.current?.slickGoTo(1);
      } else if (scrollPosition >= JackDiv && scrollPosition < TenDiv) {
        console.log("it trigger 3");
        // sliderRef?.current?.slickGoTo(2);
      } else if (scrollPosition >= TenDiv && scrollPosition < nineDiv) {
        console.log("it trigger 4");
        // sliderRef?.current?.slickGoTo(2);
      }
      // if (scrollPosition >= JackDiv && scrollPosition < queenDiv) {
      //   console.log("trigger 3");
      //   sliderRef?.current?.slickGoTo(2);
      // } else if (scrollPosition >= queenDiv && scrollPosition < kingDiv) {
      //   console.log("trigger 2");
      //   sliderRef?.current?.slickGoTo(1);
      // } else if (scrollPosition >= kingDiv) {
      //   console.log("trigger 1");
      //   sliderRef?.current?.slickGoTo(0);
      // }
      console.log("🚀 ~ handleScroll ~ scrollPosition:", scrollPosition);
      console.log("🚀 ~ handleScroll ~ kingDiv:", kingDiv);
      console.log("🚀 ~ handleScroll ~ queenDiv:", queenDiv);
      console.log("🚀 ~ handleScroll ~ JackDiv:", JackDiv);
    };
    if (!scrollEl) return;

    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [mainref]);

  return (
    <section className="w-full h-auto px-5 md:px-20 relative">
      <King refKing={refKing} />
      <Queen refQueen={refQueen} />
      <Jack refJack={refJack} />
      <Ten refTen={refTen} />
      <Nine refNine={refNine} />
      <Eight refEight={refEight} />
      <Seven refSeven={refSeven} />
      <Six refSix={refSix} />
      <Five refFive={refFive} />
      <Ace refAce={refAce} />
      {/* {open && (
        <div className="slider-container fixed w-[400px] bottom-20 left-[50%] -translate-x-[50%] z-30">
          <Slider ref={sliderRef} {...settings}>
            {CARDS.map((card) => {
              return (
                <div
                  className="w-[30px] h-[30px] bg-white rounded-full text-center"
                  key={card.id}
                >
                  <p
                    onClick={() => {
                      // goToSlide(card.id);
                      router.push(card.path);
                    }}
                  >
                    {card.card}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      )} */}
    </section>
  );
};

export default CharatorList;
