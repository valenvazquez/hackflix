import { Container } from "../styles/GlobalComponents/Container";
import { MoviesContainer, NotFoundText, SuggestionItem } from "./PagesStyles";
import Movie from "../components/Movie/Movie";
import { Redirect } from "react-router";
import { useLocation } from "react-router";
import { useRef, useState, useCallback, useEffect } from "react";
// import useInfiniteScroll from "../hooks/useInfiniteScroll";
// import { debounce } from "lodash";
// import { scrollTo } from "scroll-js";
import useMovieSearch from "../hooks/useMovieSearch";
import { Spinner } from "../styles/GlobalComponents/Spinner";

const Search = () => {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1);
  const query = new URLSearchParams(location.search).get("q");
  const { movies, hasMore, isLoading } = useMovieSearch(query, pageNumber);

  // Se crea un observer para detectar cuando el ultimo elemento aparece en la pantalla.
  // Para esto se le coloca una referencia al ultimo elemento.
  useEffect(() => {
    setPageNumber(1);
  }, [query]);

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

  return query ? (
    <Container margin="100">
      <MoviesContainer>
        {movies.length > 0 ? (
          movies.map((movie, index) => {
            if (movies.length === index + 1) {
              return (
                <>
                  <Movie key={movie.id} {...movie} />
                  <div ref={lastMovieElementRef}></div>
                </>
              );
            } else {
              return <Movie key={movie.id} {...movie} />;
            }
          })
        ) : isLoading && pageNumber === 1 ? (
          <Spinner size="lg" />
        ) : (
          !isLoading && (
            <div>
              <NotFoundText margin="0.7">
                Your search for "{query}" did not have any matches.
              </NotFoundText>
              <NotFoundText margin="0.7">Suggestions:</NotFoundText>
              <ul>
                <SuggestionItem>Try different keywords</SuggestionItem>
                <SuggestionItem>Looking for a movie or TV show?</SuggestionItem>
                <SuggestionItem>
                  Try using a movie or TV show title
                </SuggestionItem>
              </ul>
            </div>
          )
        )}
      </MoviesContainer>
      {isLoading && pageNumber > 1 && <Spinner size="md" />}
    </Container>
  ) : (
    <Redirect to="/browse" />
  );
};

export default Search;
