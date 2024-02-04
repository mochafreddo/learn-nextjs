import Movie from "@/components/movie";
import styles from "@/styles/home.module.css";

export const metadata = {
  title: "Home",
};

interface MovieType {
  id: string;
  poster_path: string;
  title: string;
}

async function getMovies(): Promise<MovieType[]> {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(API_URL);
  const json = (await response.json()) as MovieType[];
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: MovieType) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
