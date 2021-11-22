import { useState, useEffect } from "react";
import axios from "axios";

export default function useMovieDiscover(pageNumber, genre, rating) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setMovies([]);
  }, [genre, rating]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        "vote_average.gte": rating,
        with_genres: genre,
        page: pageNumber,
        api_key: "73b1ea623228aa0257b1b2d7cac9b0bb",
        sort_by: "popularity.desc",
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovies((prevMovies) => [
          ...new Set([...prevMovies, ...res.data.results]),
        ]);
        setHasMore(res.data.results.length > 0);
        setIsLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [genre, rating, pageNumber]);
  return { isLoading, error, movies, hasMore };
}
