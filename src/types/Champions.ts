// 전체 챔피언 타입
export type ChampionsList = Champion[];

export type Champions = {
  [key: string]: Champion;
};

export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: string[];
  partype: string;
  stats: { [key: string]: number };
};

export type Image = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Info = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};
