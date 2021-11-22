import { BadgeHD, MovieRating } from "../Movie/MovieStyles";
import { IoCloseSharp } from "react-icons/io5";
import {
  Modal,
  ModalBackground,
  MovieImage,
  MovieOverview,
  MoviePrimaryInfo,
  MovieSecondaryInfo,
  MovieTitle,
  SecondaryTitle,
  MovieInfo,
  ButtonClose,
} from "./MovieModalStyles";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDuration, ratingClass } from "../../constants/constants";

const MovieModal = () => {
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setMovie(location.state);
  }, [location]);

  return movie ? (
    <ModalBackground
      onClick={() => {
        document.body.style.overflowY = "auto";
        history.goBack();
      }}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        <MovieImage
          imageUrl={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
        >
          <ButtonClose
            onClick={() => {
              history.goBack();
              document.body.style.overflowY = "auto";
            }}
          >
            <IoCloseSharp />
          </ButtonClose>
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieImage>
        <MovieInfo>
          <MoviePrimaryInfo>
            <p>
              <MovieRating
                className={ratingClass[Math.floor(movie.vote_average)]}
              >
                {movie.vote_average * 10 + " % rating"}
              </MovieRating>
              <span>{movie.release_date.slice(0, 4)}</span>
              <BadgeHD>HD</BadgeHD>
              {movieDuration(movie.runtime)}
            </p>
            <MovieOverview>{movie.overview}</MovieOverview>
          </MoviePrimaryInfo>
          <MovieSecondaryInfo>
            <p>
              <SecondaryTitle>Cast: </SecondaryTitle>
              {movie.credits.cast
                .slice(0, 4)
                .map((actor) => actor.name + ", ")}{" "}
              more
            </p>
            <p>
              <SecondaryTitle>Genres: </SecondaryTitle>
              {movie.genres.map(
                (genre, index) =>
                  `${genre.name}${index < movie.genres.length - 1 ? ", " : ""}`
              )}
            </p>
          </MovieSecondaryInfo>
        </MovieInfo>
      </Modal>
    </ModalBackground>
  ) : (
    false
  );
};

export default MovieModal;
