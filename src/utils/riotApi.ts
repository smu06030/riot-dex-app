import { freeChampionIdsProp } from "@/types/ChampionRotation";

// 로테이션 챔피언 정보 가져오기
const getChampionRotation = async (): Promise<freeChampionIdsProp> => {
  try {
    const res = await fetch("http://localhost:3000/api/rotation");
    const data = await res.json();
    
    return data;
  } catch (error) {
    console.error("로테이션 챔피언 정보 가져오기 실패: ", error);
    throw new Error(
      "로테이션 챔피언 정보를 가져오는 도중 문제가 발생했습니다."
    );
  }
};

const riotApi = {
  getChampionRotation,
};

export default riotApi;
