import MoviesInfo from "@/components/movies-info";
import MoviesVideos from "@/components/movies-videos";
import { Suspense } from "react";

// 영화 상세 정보를 보여주는 컴포넌트
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie vidoes</h1>}>
        <MoviesVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MoviesInfo id={id} />
      </Suspense>
    </div>
  );
}
