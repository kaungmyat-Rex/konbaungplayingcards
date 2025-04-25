"use client";
import { MENU } from "@/constants/menu";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideNav = ({ toggle, setToggle }: Props) => {
  const router = useRouter();
  return (
    <>
      {toggle && (
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`fixed top-[72px] left-0 w-full h-full bg-black/50 z-20 overflow-hidden`}
        />
      )}

      <div
        className={`${
          toggle ? "sidenavClose" : "sidenav"
        } z-20 overflow-hidden`}
      >
        <div className="flex flex-col items-end justify-center gap-y-8 mr-5 mt-[70px]">
          {MENU.map((item) => {
            return (
              <p
                onClick={() => {
                  setToggle(!toggle);
                  router.push(item.path);
                }}
                key={item.id}
                className="sideMenuTran text-white font-Nunito font-normal text-[20px] cursor-pointer"
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNav;
