import Header from "../components/Header/Header";
import GenreSection from "../components/GenreSection/GenreSection";

const Home = () => {
  return (
    <>
      <Header />
      <GenreSection
        margin="-100"
        genreId="878"
        genreName="Science Fiction"
      ></GenreSection>
      <GenreSection margin="80" genreId="18" genreName="Drama"></GenreSection>
      <GenreSection margin="80" genreId="35" genreName="Comedy"></GenreSection>
      <GenreSection
        margin="80"
        genreId="53"
        genreName="Thriller"
      ></GenreSection>
      <GenreSection margin="80" genreId="80" genreName="Crime"></GenreSection>
    </>
  );
};

export default Home;
