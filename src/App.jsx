import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/globals";
import Navbar from "./components/Navbar/Navbar";
import MovieModal from "./components/MovieModal/MovieModal";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes />
      <MovieModal />
    </Router>
  );
}

export default App;
