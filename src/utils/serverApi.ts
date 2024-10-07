"use server";

const CHAMPIONS_API_URL = process.env.CHAMPIONS_API_URL;
const ITEMS_API_URL = process.env.ITEMS_API_URL;

// 전체 챔피언 정보 가져오기
export const fetchAllChampions = async () => {
  const res = await fetch(`${CHAMPIONS_API_URL}`, {
    next: {
      revalidate: 86400,
    },
  });
  if (!res.ok) {
    return Response.json(
      { error: "챔피언 정보 가져오기 실패" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return data;
};

// 전체 아이템 정보 가져오기
export const fetchItemList = async () => {
  const res = await fetch(`${ITEMS_API_URL}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    return Response.json(
      { error: "아이템 정보 가져오는 중 에러 발생" },
      { status: res.status }
    );
  }
  const data = await res.json();
  return data;
};
