import {
  BadgeHD,
  MovieInfo,
  MovieImage,
  MoviePreview,
  PreviewInfoContainer,
  PreviewDetails,
  MovieRating,
  Dot,
} from "./MovieStyles";
import { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";

import { useHistory, useLocation } from "react-router-dom";
import { ratingClass, movieDuration } from "../../constants/constants";

async function getMovie(id) {
  const config = {
    params: {
      api_key: "73b1ea623228aa0257b1b2d7cac9b0bb",
      append_to_response: "credits",
    },
  };
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/" + id,
    config
  );
  return data;
}

const Movie = (props) => {
  const [top, setTop] = useState("0");
  const [left, setLeft] = useState("0");
  const [width, setWidth] = useState("0");
  const [displayPreview, setDisplayPreview] = useState(false);
  const [moviePreview, setMoviePreview] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const handleMouseEnter = debounce(async (e) => {
    const movie = await getMovie(props.id);
    setMoviePreview(movie);
    setLeft(e.target.offsetLeft);
    setTop(e.target.offsetTop);
    setWidth(e.target.offsetWidth);
    setDisplayPreview(true);
  }, 600);
  return (
    <>
      <MovieImage
        src={
          props.poster_path &&
          "https://image.tmdb.org/t/p/w500" + props.poster_path
        }
        alt={props.title}
        onPointerOver={handleMouseEnter}
        onPointerLeave={() => handleMouseEnter.cancel()}
      />
      {displayPreview && (
        <MoviePreview
          top={top}
          left={left}
          width={width}
          imageUrl={
            props.poster_path
              ? "https://image.tmdb.org/t/p/w500" + props.poster_path
              : "/images/H-logo.png"
          }
          className={props.poster_path ? "" : "no-image"}
          onPointerLeave={(e) => {
            handleMouseEnter.cancel();
            setDisplayPreview(false);
          }}
          onClick={() => {
            history.push({
              search: `${location.search ? location.search + "&" : ""}?movie=${
                props.id
              }`,
              state: moviePreview,
            });
            document.body.style.overflowY = "hidden";
          }}
        >
          <PreviewDetails>
            <PreviewInfoContainer>
              <MovieRating
                className={ratingClass[Math.floor(props.vote_average)]}
              >
                {props.vote_average * 10 + " % rating"}
              </MovieRating>
              <BadgeHD>HD</BadgeHD>
              <MovieInfo>{movieDuration(moviePreview.runtime)}</MovieInfo>
            </PreviewInfoContainer>
            <PreviewInfoContainer marginTop="0.5">
              {moviePreview.genres.map((genre, index) => (
                <>
                  <MovieInfo className="genre">{genre.name}</MovieInfo>
                  {index < moviePreview.genres.length - 1 ? <Dot /> : null}
                </>
              ))}
            </PreviewInfoContainer>
          </PreviewDetails>
        </MoviePreview>
      )}
    </>
  );
};

export default Movie;
