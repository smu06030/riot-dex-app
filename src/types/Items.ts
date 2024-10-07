export type Items = {
  [key: string]: Item
}

export type Item = {
  name:        string;
  description: string;
  colloq:      string;
  plaintext:   string;
  into:        string[];
  image:       Image;
  gold:        Gold;
  tags:        string[];
  maps:        { [key: string]: boolean };
  stats:       Stats;
}

export type Gold = {
  base:        number;
  purchasable: boolean;
  total:       number;
  sell:        number;
}

export type Image = {
  full:   string;
  sprite: string;
  group:  string;
  x:      number;
  y:      number;
  w:      number;
  h:      number;
}

export type Stats = {
  FlatMovementSpeedMod: number;
}