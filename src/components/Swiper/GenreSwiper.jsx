import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Movie from "../Movie/Movie";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../../styles/GlobalComponents/Container";

SwiperCore.use([Navigation, Pagination]);
const GenreSwiper = ({ genreId, genreName }) => {
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
    <Container>
      <Swiper
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination
        navigation
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <Movie key={movie.id} {...movie}></Movie>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </Container>
  );
};

export default GenreSwiper;
