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
import Four from "./charater/Four";
import Three from "./charater/Three";
import Two from "./charater/Two";
interface mainrefProps {
  mainref: React.RefObject<HTMLDivElement | null>;
  exploreref: React.RefObject<HTMLDivElement | null>;
}
const CharatorList = ({ mainref, exploreref }: mainrefProps) => {
  const sliderRef = useRef<Slider | null>(null);
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

  const testDivRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const scrollEl = mainref?.current;
    const handleScroll = () => {
      const kingDiv = (refKing.current?.offsetTop ?? 0) + 3500;
      const queenDiv = (refQueen.current?.offsetTop ?? 0) + 3500;
      const JackDiv = (refJack.current?.offsetTop ?? 0) + 3500;
      const TenDiv = (refTen.current?.offsetTop ?? 0) + 3500;
      const nineDiv = (refNine.current?.offsetTop ?? 0) + 3500;
      const eightDiv = (refEight.current?.offsetTop ?? 0) + 3500;
      const sevenDiv = (refSeven.current?.offsetTop ?? 0) + 3500;
      const sixDiv = refSix.current?.offsetTop ?? 0;
      const fiveDiv = refFive.current?.offsetTop ?? 0;
      const fourDiv = refFour.current?.offsetTop ?? 0;
      const threeDiv = refThree.current?.offsetTop ?? 0;
      const twoDiv = refTwo.current?.offsetTop ?? 0;
      const aceDiv = refAce.current?.offsetTop ?? 0;

      // const testdiv = refKing.current?.offsetParent ?? 0;
      // console.log("🚀 ~ handleScroll ~ testdiv:", kingDiv);
      const scrollPosition = Math.floor(mainref?.current?.scrollTop ?? 0);
      // console.log("🚀 ~ handleScroll ~ kingDiv:", kingDiv);

      if (scrollPosition >= kingDiv && scrollPosition < queenDiv) {
        console.log("it trigger 1");
      } else if (scrollPosition >= queenDiv && scrollPosition < JackDiv) {
        console.log("it trigger 2");
      } else if (scrollPosition >= JackDiv && scrollPosition < TenDiv) {
        console.log("it trigger 3");
      } else if (scrollPosition >= TenDiv && scrollPosition < nineDiv) {
        console.log("it trigger 4");
      } else if (scrollPosition >= nineDiv && scrollPosition < eightDiv) {
        console.log("it end");
      }
      console.log("🚀 ~ handleScroll ~ scrollPosition:", scrollPosition);
    };
    if (!scrollEl) return;

    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [mainref]);

  return (
    <section ref={exploreref} className="w-full h-auto px-5 md:px-20 relative">
      <King refKing={refKing} />
      <Queen refQueen={refQueen} />
      <Jack refJack={refJack} />
      <Ten refTen={refTen} />
      <Nine refNine={refNine} />
      <Eight refEight={refEight} />
      <Seven refSeven={refSeven} />
      <Six refSix={refSix} />
      <Five refFive={refFive} />
      <Four refFour={refFour} />
      <Three refThree={refThree} />
      <Two refTwo={refTwo} />
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
