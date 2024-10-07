import MainImageCard from "@/components/MainImageCard";

export default async function Home() {
  const imageCardData = [
    {
      src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_3.jpg",
      alt: "Riven",
      description: "챔피언 목록 보기",
      href: "/champions",
    },
    {
      src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_3.jpg",
      alt: "Zed",
      description: "아이템 목록 보기",
      href: "/items",
    },
    {
      src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_2.jpg",
      alt: "Akali",
      description: "금주 로테이션 확인",
      href: "/rotation",
    },
  ];

  return (
    <main className="main-container">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-[#ff5555] text-3xl font-bold">
          리그 오브 레전드 정보 앱
        </h2>
        <p className="text-[#6b7280] mt-4">
          Riot Games API를 활용해 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>

      <div className="text-[#fbbf24]">
        {imageCardData.map((card, index) => (
          <MainImageCard
            key={index}
            src={card.src}
            alt={card.alt}
            href={card.href}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
}
