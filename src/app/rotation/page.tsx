"use client";

import GameCard from "@/components/GameCard";
import useRotation from "@/hooks/useRotation";
import React from "react";

const RotationPage = () => {
  const { rotationChampions } = useRotation();

  return (
    <main className="main-container">
      <div className="mb-4">
        <h2 className="text-3xl text-[#ff5555] font-bold">챔피언 로테이션</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {rotationChampions?.map((champion) => (
          <GameCard key={champion.id} champion={champion} />
        ))}
      </div>
    </main>
  );
};

export default RotationPage;
