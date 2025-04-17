import { CardType } from "@/types";
import spade1 from "../../public/cardImg/king spade.svg";
import spade2 from "../../public/cardImg/Queen spade.svg";
import spade3 from "../../public/cardImg/Jack spade.png.svg";

import heart1 from "../../public/cardImg/8 heart.png.svg";
import heart2 from "../../public/cardImg/9 heart.png.svg";
import heart3 from "../../public/cardImg/10 heart.png.svg";

import club1 from "../../public/cardImg/2 club.svg";
import club2 from "../../public/cardImg/3 club.svg";
import club3 from "../../public/cardImg/4 club.svg";
import club4 from "../../public/cardImg/Ace club.svg";
import diamond1 from "../../public/cardImg/5 diamond.svg";
import diamond2 from "../../public/cardImg/6 diamond.svg";
import diamond3 from "../../public/cardImg/7 diamond.svg";

export const CARDLIST: CardType[] = [
  { id: 1, cardPower: "spade", ImgPath: spade1, type: 13 },
  { id: 2, cardPower: "spade", ImgPath: spade2, type: 12 },
  { id: 3, cardPower: "spade", ImgPath: spade3, type: 11 },

  { id: 4, cardPower: "heart", ImgPath: heart3, type: 10 },
  { id: 5, cardPower: "heart", ImgPath: heart2, type: 9 },
  { id: 6, cardPower: "heart", ImgPath: heart1, type: 8 },

  { id: 7, cardPower: "diamond", ImgPath: diamond3, type: 7 },
  { id: 8, cardPower: "diamond", ImgPath: diamond2, type: 6 },
  { id: 9, cardPower: "diamond", ImgPath: diamond1, type: 5 },

  { id: 10, cardPower: "club", ImgPath: club3, type: 4 },
  { id: 11, cardPower: "club", ImgPath: club2, type: 3 },
  { id: 12, cardPower: "club", ImgPath: club1, type: 2 },
  { id: 13, cardPower: "club", ImgPath: club4, type: 1 },
];
