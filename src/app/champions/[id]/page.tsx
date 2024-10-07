import { ChampionDetailData } from "@/types/ChampionDetail";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";

type Prop = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Prop): Metadata => {
  const id = params.id;

  return {
    title: `${id} 상세 페이지`,
    description: " 챔피언 상세 페이지",
  };
};

const ChampionDetailPage = async ({ params }: Prop) => {
  const id = params.id;

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${id}.json`
  );

  const { data }: { data: ChampionDetailData } = await res.json();
  const champion = data[id];

  return (
    <main className="main-container">
      <div className="mb-4 text-center">
        <h2 className="text-3xl text-[#ff5555] font-bold">{champion.name}</h2>
        <h2 className="text-xl text-gray-500">{champion.title}</h2>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={`${champion.name}`}
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-xl text-[#ff5555] font-bold mb-4">설명</h2>
        <p>{champion.lore}</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-xl text-[#ff5555] font-bold mb-4">스탯</h2>
        <p>공격력: {champion.info.attack}</p>
        <p>방어력: {champion.info.defense}</p>
        <p>마법력: {champion.info.magic}</p>
        <p>난이도: {champion.info.difficulty}</p>
      </div>
    </main>
  );
};

export default ChampionDetailPage;
