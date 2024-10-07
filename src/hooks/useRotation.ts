"use client";

import riotApi from "@/utils/riotApi";
import { freeChampionIdsProp } from "@/types/ChampionRotation";
import { Champions, ChampionsList } from "@/types/Champions";
import { fetchAllChampions } from "@/utils/serverApi";
import { useCallback, useEffect, useState } from "react";

const useRotation = () => {
  const [rotationChampions, setRotationChampions] = useState<ChampionsList | null>(null);

  const fetchRotation = useCallback(async () => {
    const data: freeChampionIdsProp = await riotApi.getChampionRotation();
    const { data: allChampions }: {data: Champions} = await fetchAllChampions();

    const rotationChampions = Object.values(allChampions).filter(({ key }) =>
      data.freeChampionIds.includes(+key)
    );

    setRotationChampions(rotationChampions);
  }, []);

  useEffect(() => {
    fetchRotation();
  }, [fetchRotation]);

  return {
    rotationChampions,
  };
};

export default useRotation;
