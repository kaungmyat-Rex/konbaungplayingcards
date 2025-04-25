"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoImg from "../../../public/logo.svg";
import { MENU } from "@/constants/menu";
import Hamburger from "../common/Hamburger";
import Link from "next/link";
import SideNav from "./SideNav";
import { useActiveSection } from "@/context/activeSection";
// import { usePathnam , } from "next/navigation";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { activeSection } = useActiveSection();

  return (
    <header>
      <div
        className={`w-full overflow-hidden fixed top-0 lg:-left-[8px] flex items-center justify-between px-6 md:px-20 py-2 z-30 bg-[#c7484850] backdrop-blur-lg `}
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
                  className={`text-white font-Nunito font-semibold text-[15px] cursor-pointer relative transition-all duration-300 ease-in-out`}
                >
                  {item.title}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] ${
                      activeSection === item.title.toLowerCase()
                        ? "w-full"
                        : "w-0"
                    } bg-white rounded-full transition-all duration-300`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <Hamburger toggle={toggle} setToggle={setToggle} />
      </div>
      <SideNav toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
