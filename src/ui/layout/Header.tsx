"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoImg from "../../../public/logo.svg";
import { MENU } from "@/constants/menu";
import useNavScroll from "@/hooks/useNavScroll";
import Hamburger from "../common/Hamburger";
import Link from "next/link";
const Header = () => {
  const [scroll] = useNavScroll();

  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header
      className={`w-full fixed top-0 flex items-center justify-between px-6 md:px-20 py-2 z-40 backdrop-blur-sm ${
        scroll ? "backdrop-blur-lg" : ""
      }`}
    >
      <div className="flex items-center justify-center gap-x-3">
        <Image
          src={logoImg}
          alt="logo"
          width={55}
          height={55}
          objectFit="contain"
          className=""
        />
        <p className="font-BurmaBold text-[30px] md:text-[40px] text-white">
          ကုန်းဘောင်
        </p>
      </div>
      <div className="hidden sm:block">
        <div className="flex items-center justify-center gap-x-8">
          {MENU.map((item) => {
            return (
              <Link
                href={item.path}
                key={item.id}
                className="text-white font-Nunito font-semibold text-[15px] cursor-pointer"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <Hamburger toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
