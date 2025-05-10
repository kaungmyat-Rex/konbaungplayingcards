import React from "react";
import mandalaydarkImg from "../../public/mandalaydarker.svg";
import mockupone from "../../public/MockUp_1.svg";
import mockupTwo from "../../public/MockUp_2.svg";
import mockupThree from "../../public/MockUp_3.svg";
import mockupFour from "../../public/MockUp_4.svg";
import leftKanot from "../../public/kanote_left.svg";
import rightKanot from "../../public/kanote_right.svg";
import ayoteone from "../../public/ayote1.svg";
import ayotetwo from "../../public/ayote2.svg";
import ayotethree from "../../public/ayote3.svg";
import ayotefour from "../../public/ayote4.svg";
import ayotefive from "../../public/ayote5.svg";
import ayoteSize from "../../public/ayoteSize.svg";
import { FaTruckFast } from "react-icons/fa6";
import { GiPokerHand } from "react-icons/gi";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";
const Shop = () => {
  return (
    <div className="w-full h-auto ">
      <div className="relative w-full h-[500px]">
        <Image
          src={mandalaydarkImg}
          alt="mandalay"
          width={1200}
          height={1200}
          className="w-full h-full object-cover "
        />
        <h4 className="font-BurmaBold text-[80px] md:text-[100px] lg:text-[200px] text-white absolute top-[47%] left-[50%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap">
          ကုန်းဘောင်
        </h4>
        <p className="font-Elephant text-[32px] top-[54%] left-[62%] md:left-[58%] text-white absolute lg:text-[80px] lg:top-[63%] lg:left-[58%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap">
          Konbaung
        </p>
        <p className="font-Elephant text-[20px] md:text-[35px] lg:text-[60px] lg:top-[75%] text-white absolute top-[62%] left-[50%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap">
          Burmese Royal Rank Playing Cards
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start md:px-28 pt-10 md:pt-0 gap-x-16">
        <div className="flex-[8] flex flex-col justify-center items-end">
          <div className="relative px-[20px] ">
            <Image
              src={mockupone}
              alt="mockup"
              width={1200}
              height={1200}
              className="w-[450px] h-full object-contain"
            />
            <div className="flex flex-row md:flex-col justify-center items-center absolute left-[50%] -translate-x-[50%] -bottom-[50px] md:-top-[220px] md:left-2 md:bottom-0">
              <h4 className="m-0 text-white text-[25px] md:text-[40px] font-bold font-Nunito tracking-[3px]">
                700
              </h4>
              <p className="md:-mt-[15px] text-white text-[25px] md:text-[40px] font-bold font-Nunito tracking-[4px]">
                Baht
              </p>
            </div>
          </div>
          <div className="max-w-[600px] w-full relative p-12 md:mt-5 mt-20 flex justify-center items-center ">
            <Image
              src={leftKanot}
              alt="Lkanot"
              className="absolute w-[100px] left-[20px] top-0"
            />
            <Image
              src={rightKanot}
              alt="Rkanot"
              className="absolute w-[100px] right-[20px] md:bottom-10 bottom-0"
            />
            <p className="text-white font-Nunito text-[15px] md:text-[20px] font-semibold text-center w-[70%] mb-6">
              Konbaung Playing Cards _ inspired by traditional card decks,
              redesigned with the ranks of Burmese Royal Court
            </p>
          </div>
          <Image
            src={mockupTwo}
            className="max-w-[600px] w-full object-contain mt-16"
            alt="mk2"
          />
          <div className="max-w-[600px] w-full relative p-12 mt-5 flex justify-center items-center ">
            <Image
              src={leftKanot}
              alt="Lkanot"
              className="absolute w-[100px] left-[20px] top-0"
            />
            <Image
              src={rightKanot}
              alt="Rkanot"
              className="absolute w-[100px] right-[20px] md:bottom-10 bottom-0"
            />
            <p className="text-white font-Nunito text-[15px] md:text-[20px] font-semibold text-center w-[91%] mt-3 md:mb-6">
              Includes 1 instruction & Translation Guide Card and 54 Playing
              cards from Ace to King, every card is written in Burmese script —
              perfect for collectors, culture lovers, and card game fans alike.
            </p>
          </div>
          <div className="relative max-w-[600px] w-full h-[500px] px-[20px]">
            <Image
              src={mockupThree}
              className="max-w-[500px] w-full object-contain left-0 top-0 relative md:absolute"
              alt="mk3"
            />
            <p className="text-white font-Nunito text-[15px] md:text-[20px] font-semibold text-center absolute md:w-[55%] w-[91%] md:bottom-[90px] bottom-[70px] right-[20px] md:right-0 ">
              54 Playing cards including 13 Spades, 13 Hearts, 13 Diamonds, 13
              Clubs and 2 Jokers
            </p>
          </div>
          <div className="relative max-w-[600px] w-full h-[300px] flex justify-center item-center px-[20px]">
            <Image
              src={mockupFour}
              className="max-w-[350px] w-[300px] md:w-full object-contain md:absolute relative md:right-[70px] top-0"
              alt="mk3"
            />
            <p className="text-white font-Nunito text-[20px] font-semibold text-center absolute md:left-20 md:bottom-[90px] left-[50%] -translate-x-[50%] -bottom-[20px] whitespace-nowrap">
              1 Translation Guide Card
            </p>
          </div>
        </div>
        <div className="flex-[4] flex justify-center items-center md:sticky top-20 p-[20px] mt-[100px] md:mt-0 md:p-0">
          <div className="max-w-[400px] md:max-w-[300px] w-full border border-white rounded-lg p-5">
            <div className="flex justify-between items-center gap-x-2">
              <h4 className="font-Montserrat text-[17px] font-semibold text-white">
                Kongbaung Royal Rank Playing Cards
              </h4>
              <p className="font-Montserrat text-[17px] font-medium text-white">
                ฿700 THB
              </p>
            </div>
            <p className="font-Nunito text-[15px] font-normal text-white mt-3 text-justify">
              You will receive one complete 54-card deck of Kongbaung Playing
              Cards, featuring the full royal court ranks of the Konbaung
              Dynasty — illustrated based on historic manuscripts, with every
              number and title in Burmese script.
            </p>
            <div className="mt-5 flex flex-col justify-center items-start gap-y-2">
              <p className="font-Nunito text-[15px] font-bold text-white">
                Includes:
              </p>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <IoMdCheckmark color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Full 54-card deck (Court, Military, Ministers, and more)
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <IoMdCheckmark color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Burmese numerals and alphabet throughout
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <IoMdCheckmark color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Instruction + Translation card
                </p>
              </span>
            </div>
            <div className="mt-5 flex flex-col justify-center items-start gap-y-2">
              <span>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Perfect for collectors, gamers, culture lovers, and history
                  nerds.
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <FaTruckFast color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Ships worldwide
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <GiPokerHand color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  1 item included (+ optional add-ons)
                </p>
              </span>
              <Link
                href={"#contact"}
                className="font-Nunito text-[16px] font-normal text-white border border-white w-full text-center rounded-md p-3 mt-3 hover:bg-white/25 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* shop 2 for a yote */}
      <div className="flex flex-col md:flex-row justify-center items-start md:px-28 pt-32 gap-x-16">
        <div className="flex-[8] flex flex-col justify-center items-end">
          <Image
            src={ayoteone}
            alt="ayote1"
            width={1400}
            height={1200}
            className="max-w-[600px] w-full h-full object-contain"
          />
          {/* <div className="flex flex-row md:flex-col justify-center items-center absolute left-[50%] -translate-x-[50%] -bottom-[50px] md:-top-[220px] md:left-2 md:bottom-0">
              <h4 className="m-0 text-white text-[25px] md:text-[40px] font-bold font-Nunito tracking-[3px]">
                700
              </h4>
              <p className="md:-mt-[15px] text-white text-[25px] md:text-[40px] font-bold font-Nunito tracking-[4px]">
                Baht
              </p>
            </div> */}

          <div className="max-w-[600px] w-full relative p-12 md:mt-5 mt-20 flex justify-center items-center ">
            <Image
              src={leftKanot}
              alt="Lkanot"
              className="absolute w-[100px] left-[20px] top-0"
            />
            <Image
              src={rightKanot}
              alt="Rkanot"
              className="absolute w-[100px] right-[20px] md:bottom-10 bottom-0"
            />
            <p className="text-white font-Nunito text-[15px] md:text-[20px] font-semibold text-center w-[95%] mb-6">
              For over seventy years, Myanmar has endured the turmoil of
              internal conflict, leaving its people to navigate a life of full
              hardships and uncertainty. Children, too, have grown up in this
              harsh reality, grappling with fear, trauma and a sense of
              hopelessness. Yet, amidst these struggles, the people of Myanmar
              hold onto stories of hope, resilience and joy.
            </p>
          </div>
          <Image
            src={ayotetwo}
            className="max-w-[600px] w-full object-contain"
            alt="ayote2"
          />
          <div className="max-w-[600px] w-full relative p-12 mt-5 flex justify-center items-center ">
            <Image
              src={leftKanot}
              alt="Lkanot"
              className="absolute w-[100px] left-[20px] top-0"
            />
            <Image
              src={rightKanot}
              alt="Rkanot"
              className="absolute w-[100px] right-[20px] md:bottom-10 bottom-0"
            />
            <p className="text-white font-Nunito text-[15px] md:text-[20px] font-semibold text-center w-full mt-3 md:mb-6">
              Phoe Wa (Embodiment of joy and warmth), radiates happiness
              wherever he goes, effortlessly spreading smiles and laughter with
              his endearing giggles and his danncing move. With a round,
              cheerfil face and a contagious smile, "Phoe Wa" captures the
              hearts of children across Myanmar. Join Phoe Wa on whimsical
              journeys filled with laughter, imagination, and the spirit of
              play!.
            </p>
          </div>

          <Image
            src={ayotethree}
            className="max-w-[600px] w-full object-contain"
            alt="ayote3"
          />
          <div className="max-w-[600px] w-full relative p-12 mt-5 flex justify-center items-center ">
            <Image
              src={leftKanot}
              alt="Lkanot"
              className="absolute w-[100px] left-[20px] top-0"
            />
            <Image
              src={rightKanot}
              alt="Rkanot"
              className="absolute w-[100px] right-[20px] md:bottom-10 bottom-0"
            />
            <p className="text-white font-Nunito text-[15px] md:text-[20px] font-semibold text-center w-full mt-3 md:mb-6">
              Pyit Tine Htaung (The One Who Always Stands Back Up) is the iconic
              symbol of resilience and spirit in Myanmar. Pyit Tine Htaung
              reminds us that no matter the difficulties we face in life, we can
              stand tall with courage and dignity. Join this charming figure on
              a journey of empowerment, hope, and the celebration!
            </p>
          </div>
          <Image
            src={ayoteSize}
            className="max-w-[600px] w-full object-contain"
            alt="ayote3"
          />
          <Image
            src={ayotefour}
            className="max-w-[600px] w-full object-contain"
            alt="ayote3"
          />
          <Image
            src={ayotefive}
            className="max-w-[600px] w-full object-contain"
            alt="ayote3"
          />
        </div>
        <div className="flex-[4] flex flex-col gap-y-5 justify-center items-center md:sticky top-20 p-[20px] mt-[100px] md:pt-[280px] md:mt-0 md:p-0 md:overflow-y-scroll h-[90dvh]">
          <div className="max-w-[400px] md:max-w-[300px] w-full border border-white rounded-lg p-5">
            <div className="flex justify-between items-center gap-x-2">
              <h4 className="font-Montserrat text-[17px] font-semibold text-white">
                Choose ONE Character
              </h4>
              <p className="font-Montserrat text-[17px] font-medium text-white">
                ฿3000 THB
              </p>
            </div>

            <div className="mt-5 flex flex-col justify-center items-start gap-y-2">
              <p className="font-Nunito text-[15px] font-bold text-white">
                This package includes one art toy <br />
                Options Include:
              </p>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <IoMdCheckmark color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Phoe Wa
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <IoMdCheckmark color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Pyit Tine Htaung
                </p>
              </span>
            </div>
            <div className="mt-5 flex flex-col justify-center items-start gap-y-2">
              <span>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  *You can add ...THB more per additional character you wish to
                  your order.
                </p>
              </span>
              <span>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Perfect for collectors, gamers, culture lovers, and history
                  nerds.
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <FaTruckFast color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Ships worldwide
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <GiPokerHand color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  1 item included (+ optional add-ons)
                </p>
              </span>
              <Link
                href={"#contact"}
                className="font-Nunito text-[16px] font-normal text-white border border-white w-full text-center rounded-md p-3 mt-3 hover:bg-white/25 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Buy Now
              </Link>
            </div>
          </div>
          <div className="max-w-[400px] md:max-w-[300px] w-full border border-white rounded-lg p-5">
            <div className="flex justify-between items-center gap-x-2">
              <h4 className="font-Montserrat text-[17px] font-semibold text-white">
                Full Set of TWO
              </h4>
              <p className="font-Montserrat text-[17px] font-medium text-white">
                ฿5500 THB
              </p>
            </div>

            <div className="mt-5 flex flex-col justify-center items-start gap-y-2">
              <p className="font-Nunito text-[15px] font-bold text-white">
                This package includes a full set of two art toys:
              </p>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <IoMdCheckmark color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Phoe Wa
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <IoMdCheckmark color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Pyit Tine Htaung
                </p>
              </span>
            </div>
            <div className="mt-5 flex flex-col justify-center items-start gap-y-2">
              <span>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Perfect for collectors, gamers, culture lovers, and history
                  nerds.
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <FaTruckFast color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  Ships worldwide
                </p>
              </span>
              <span className="flex justify-center items-start gap-x-2">
                <div>
                  <GiPokerHand color="white" className="text-[20px]" />
                </div>
                <p className="font-Nunito text-[15px] font-normal text-white">
                  1 item included (+ optional add-ons)
                </p>
              </span>
              <Link
                href={"#contact"}
                className="font-Nunito text-[16px] font-normal text-white border border-white w-full text-center rounded-md p-3 mt-3 hover:bg-white/25 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
