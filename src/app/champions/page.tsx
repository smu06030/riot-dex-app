import GameCard from "@/components/GameCard";
import { ChampionsList } from "@/types/Champions";
import { fetchAllChampions } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "챔피언 목록",
  description: "리그오브레전드 챔피언 목록",
};

const ChampionsPage = async () => {
  const { data: allChampions }: { data: ChampionsList } =
    await fetchAllChampions();

  return (
    <main className="main-container">
      <div className="mb-4">
        <h2 className="text-3xl text-[#ff5555] font-bold">챔피언 목록</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {Object.values(allChampions)?.map((champion) => (
          <GameCard key={champion.id} champion={champion} />
        ))}
      </div>
    </main>
  );
};

export default ChampionsPage;
