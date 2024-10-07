import { ChampionRotationProps } from "@/types/ChampionRotation";

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const ROTATION_API_URL = process.env.ROTATION_API_URL;

export const GET = async () => {
  if (!RIOT_API_KEY) return Response.json({ error: "API KEY가 없습니다." });
  const res = await fetch(`${ROTATION_API_URL}`, {
    headers: {
      "X-Riot-Token": RIOT_API_KEY,
    },
  });

  if (!res.ok) {
    return Response.json(
      { error: "Failed to fetch champion rotations" },
      { status: res.status }
    );
  }

  const data: ChampionRotationProps = await res.json();

  const filteredData = {
    freeChampionIds: data.freeChampionIds,
  };

  return Response.json(filteredData);
};
