import { API_URL } from "@/app/(home)/page";

// 영화 관련 비디오를 가져오는 함수
async function getVideos(id: string) {
  console.log(`영화 관련 비디오 가져오는 중: ${Date.now()}`);
  const res = await fetch(`${API_URL}/${id}/videos`);
  if (!res.ok) {
    // API 응답이 정상이 아닐 경우 오류를 발생시킵니다.
    throw new Error(
      `영화 관련 비디오를 가져오는데 실패했습니다: ${res.status} ${res.statusText}`
    );
  }
  return res.json();
}

export default async function MoviesVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
