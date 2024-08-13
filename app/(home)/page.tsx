import Movie from "@/components/movie";
import { Metadata } from "next";
import style from "../../styles/home.module.css";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata: Metadata = {
  //metadata: 서버 컴포넌트, 페이지, 레이아웃에만 있을 수 있다.
  title: "Home",
};

//backend에서 fetch 된다
async function getMovies() {
  //return fetch(URL).then((res) => res.json());
  //await new Promise((resolve) => setTimeout(resolve, 5000)); //backend에서 5초 기다리기
  const res = await fetch(API_URL); //await: 어떤 일이 발생하기를 기다리려고 할 때 사용
  const json = await res.json(); //await: 부모 함수에 무조건 async를 붙여야 한다.
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  //return <div>{JSON.stringify(movies)}</div>;
  return (
    <div className={style.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
