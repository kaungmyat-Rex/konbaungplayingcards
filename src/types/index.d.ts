export interface MenuType {
  id: number;
  title: string;
  path: string;
}

export interface CardType {
  id: number;
  cardPower: string;
  ImgPath: string;
  type: number;
  path: string;
}

interface Card {
  id: number;
  card: string;
  path: string;
}
