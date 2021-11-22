import { useState, useEffect } from "react";
import { GenreContainer, GenreTitle } from "./GenreSectionStyles";
import Movie from "../Movie/Movie";
import axios from "axios";
import { Container } from "../../styles/GlobalComponents/Container";

const GenreSection = ({ genreId, genreName, margin }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getGenreMovies() {
      const config = {
        params: {
          api_key: "73b1ea623228aa0257b1b2d7cac9b0bb",
          with_genres: genreId,
        },
      };
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        config
      );
      setMovies(data.results);
    }
    getGenreMovies();
  }, [genreId]);
  return (
    movies.length && (
      <Container margin={margin} key={genreId}>
        <GenreTitle>{genreName}</GenreTitle>
        <GenreContainer>
          {movies.map((movie) => (
              <Movie
                key={`${movie.id}_${genreId}`}
                genre={genreId}
                {...movie}
              ></Movie>
          ))}
        </GenreContainer>
      </Container>
    )
  );
};

export default GenreSection;
