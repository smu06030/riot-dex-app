export type ChampionRotationProps = {
  freeChampionIds: number[];
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
};

export type freeChampionIdsProp = Pick<ChampionRotationProps, "freeChampionIds">;
