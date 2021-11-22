import {
  HeaderContainer,
  HeaderMovieBadge,
  HeaderMovieTitle,
  HeaderMovieOverview,
} from "./HeaderStyles";
import { Container } from "../../styles/GlobalComponents/Container";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function getTrendingMovie() {
      const config = {
        params: { api_key: "73b1ea623228aa0257b1b2d7cac9b0bb" },
      };
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/550",
        config
      );
      setMovie(data);
    }
    getTrendingMovie();
  }, []);
  return (
    movie && (
      <HeaderContainer
        imageUrl={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
      >
        <Container>
          <HeaderMovieBadge>
            <img src="/images/H-logo.png" alt={movie.title} />
            movie
          </HeaderMovieBadge>
          <HeaderMovieTitle>{movie.title}</HeaderMovieTitle>
          <HeaderMovieOverview>
            {movie.overview.replace(/\..*/, ".")}
          </HeaderMovieOverview>
        </Container>
      </HeaderContainer>
    )
  );
};

export default Header;
