import GameCard from "@/components/GameCard";
import { Items } from "@/types/Items";
import { fetchItemList } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "아이템 목록",
  description: "리그오브레전드 아이템 목록",
};

const ItemsPage = async () => {
  const { data: items }: { data: Items } = await fetchItemList();

  return (
    <main className="main-container">
      <div className="mb-4">
        <h2 className="text-3xl text-[#ff5555] font-bold">아이템 목록</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {Object.values(items)?.map((item) => (
          <GameCard key={item.name} item={item} />
        ))}
      </div>
    </main>
  );
};

export default ItemsPage;
