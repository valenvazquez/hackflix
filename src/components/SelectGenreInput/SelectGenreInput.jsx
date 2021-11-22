import axios from "axios";
import { useEffect, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { useRouteMatch } from "react-router";
import {
  SelectButton,
  SelectOptionsContainer,
  SelectItem,
} from "./SelectGenreInputStyles";

const SelectGenreInput = () => {
  const [displayOptions, setDisplayOptions] = useState(false);
  const [genres, setGenres] = useState([]);
  const { url } = useRouteMatch();
  useEffect(() => {
    async function getGenres() {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        { params: { api_key: "73b1ea623228aa0257b1b2d7cac9b0bb" } }
      );
      setGenres(data.genres);
    }
    getGenres();
  }, []);

  return (
    <SelectButton
      onClick={(e) => {
        setDisplayOptions(!displayOptions);
      }}
    >
      Genres
      <RiArrowDownSFill />
      {displayOptions && (
        <SelectOptionsContainer>
          {genres.map((genre) => (
            <SelectItem to={`${url}?genre=${genre.id}`}>
              {genre.name}
            </SelectItem>
          ))}
        </SelectOptionsContainer>
      )}
    </SelectButton>
  );
};

export default SelectGenreInput;
