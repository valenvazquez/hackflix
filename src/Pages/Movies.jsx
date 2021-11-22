import { MoviesContainer, PageTitle } from "./PagesStyles";
import { useState, useEffect, useCallback, useRef } from "react";
import Movie from "../components/Movie/Movie";
import { Container } from "../styles/GlobalComponents/Container";
import useMovieDiscover from "../hooks/useMovieDiscover";
import SelectGenreInput from "../components/SelectGenreInput/SelectGenreInput";
import { StyledLink } from "./PagesStyles";
import { useLocation } from "react-router";
import axios from "axios";

const Movies = () => {
  const [genre, setGenre] = useState(null);
  const location = useLocation();
  const genreId = new URLSearchParams(location.search).get("genre");
  const [pageNumber, setPageNumber] = useState(1);
  // const [rating, setRating] = useState(0);
  const { movies, isLoading, hasMore } = useMovieDiscover(pageNumber, genreId);

  useEffect(() => {
    async function getGenres() {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        { params: { api_key: "73b1ea623228aa0257b1b2d7cac9b0bb" } }
      );
      setGenre(data.genres.filter((genre) => genre.id === Number(genreId))[0]);
    }
    getGenres();
    setPageNumber(1);
  }, [genreId]);

  const observer = useRef();
  const lastMovieElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );
  return (
    <>
      <PageTitle className={genre && "secondary"}>
        <StyledLink className="movies-link" to={location.pathname}>
          Movies
        </StyledLink>
        {genre && <span>{genre.name}</span>}
        <SelectGenreInput />
      </PageTitle>
      <Container>
        <MoviesContainer>
          {movies.map((movie, index) => {
            if (movies.length - 1 === index) {
              return (
                <>
                  <Movie key={movie.id} {...movie} />
                  <div key={"ref_" + movie.id} ref={lastMovieElementRef}></div>
                </>
              );
            } else {
              return <Movie key={movie.id} {...movie} />;
            }
          })}
        </MoviesContainer>
      </Container>
    </>
  );
};

export default Movies;
