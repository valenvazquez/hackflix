import { Switch, Route, Redirect } from "react-router";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Movies from "./Pages/Movies";

const Routes = ({ movieSearch, setMovieSearch }) => {
  return (
    <Switch>
      <Redirect from="/" to="/browse" exact />
      <Route path="/browse" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/movies" component={Movies} />
    </Switch>
  );
};

export default Routes;
