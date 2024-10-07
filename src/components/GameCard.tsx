import { Champion } from "@/types/Champions";
import { Item } from "@/types/Items";
import Image from "next/image";
import Link from "next/link";

interface CardProp {
  champion: Champion;
  item: Item;
}

type PartialCardProp = Partial<CardProp>;

const GameCard = ({ champion, item }: PartialCardProp) => {
  if (!champion && !item) return <div>정보가 없습니다.</div>;

  return (
    <div className="flex just-center items-center flex-col">
      {/* 챔피언 정보 */}
      {champion && (
        <Link href={`champions/${champion.id}`}>
          <div className="w-[150px] text-center  hover:brightness-[120%]">
            <Image
              width={300}
              height={300}
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
              alt={champion.name}
            />

            <div className="text-lg">{champion.name}</div>
            <div className="text-sm text-gray-500">{champion.title}</div>
          </div>
        </Link>
      )}

      {/* 아이템 정보 */}
      {item && (
        <div className="w-[200px] h-[200px] flex justify-between items-center flex-col text-center">
          <Image
            width={item.image.w}
            height={item.image.y}
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
            alt={item.name}
            className="mb-4"
          />

          <div className="text-lg">{item.name}</div>
          <div className="text-sm text-gray-500">{item.plaintext}</div>
        </div>
      )}
    </div>
  );
};

export default GameCard;
