import { API_URL } from "@/app/constants";
import potato from "@/styles/movie-info.module.css";
import Image from "next/image";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <Image
        className={potato.poster}
        src={movie.poster_path}
        alt={movie.title}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        width={364}
        height={546}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
