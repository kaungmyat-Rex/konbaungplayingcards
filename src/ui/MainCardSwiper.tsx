"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Keyboard } from "swiper/modules";
import Image from "next/image";
import { CARDLIST } from "@/constants/cardList";
import spadeSymbol from "../../public/cardImg/spade symbol.svg";
import heartSymbol from "../../public/cardImg/heart symbol.svg";
import clubSymbol from "../../public/cardImg/club symbol.svg";
import diamondSymbol from "../../public/cardImg/diamond symbol.svg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useRouter } from "next/navigation";

const MainCardSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const router = useRouter();
  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index, 800);
    }
  };

  return (
    <div className="w-[120%] md:w-[75%]">
      <Swiper
        effect={"coverflow"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        // slidesPerView={2}
        modules={[EffectCoverflow, Keyboard]}
        className="w-full h-full"
      >
        {CARDLIST.map((card, index) => {
          return (
            <SwiperSlide
              className="rounded-lg cursor-pointer"
              key={card.id}
              onClick={() => {
                console.log(card.id);
                router.push(card.path);
              }}
            >
              <Image
                className="w-full h-full"
                src={card.ImgPath}
                alt="cardImg"
                width={100}
                height={100}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-full flex justify-center items-center gap-x-5 mt-10">
        <MdOutlineKeyboardArrowLeft
          className="cursor-pointer"
          size={50}
          color="white"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Image
          onClick={() => goToSlide(0)}
          src={spadeSymbol}
          alt="btnImg"
          width={100}
          height={100}
          objectFit="contain"
          className={`bg-white rounded-full w-[50px] h-[50px] cursor-pointer ${
            activeIndex <= 2 ? "" : "opacity-50"
          }`}
        />

        <Image
          onClick={() => goToSlide(3)}
          src={heartSymbol}
          alt="btnImg"
          width={100}
          height={100}
          objectFit="contain"
          className={`bg-white rounded-full w-[50px] h-[50px] cursor-pointer ${
            activeIndex === 3 || activeIndex === 4 || activeIndex === 5
              ? ""
              : "opacity-50"
          }`}
        />
        <Image
          onClick={() => goToSlide(6)}
          src={diamondSymbol}
          alt="btnImg"
          width={100}
          height={100}
          objectFit="contain"
          className={`bg-white rounded-full w-[50px] h-[50px] cursor-pointer ${
            activeIndex === 6 || activeIndex === 7 || activeIndex === 8
              ? ""
              : "opacity-50"
          }`}
        />

        <Image
          onClick={() => goToSlide(9)}
          src={clubSymbol}
          alt="btnImg"
          width={100}
          height={100}
          objectFit="contain"
          className={`bg-white rounded-full w-[50px] h-[50px] cursor-pointer ${
            activeIndex >= 9 ? "" : "opacity-50"
          }`}
        />

        <MdOutlineKeyboardArrowRight
          className="cursor-pointer"
          size={50}
          color="white"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </div>
  );
};

export default MainCardSwiper;
