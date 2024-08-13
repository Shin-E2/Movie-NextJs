import MoviesInfo, { getMovie } from "@/components/movies-info";
import MoviesVideos from "@/components/movies-videos";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// 영화 상세 정보를 보여주는 컴포넌트
export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MoviesInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie vidoes</h1>}>
        <MoviesVideos id={id} />
      </Suspense>
    </div>
  );
}
