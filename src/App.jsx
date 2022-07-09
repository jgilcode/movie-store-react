import styles from "./App.module.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>🍿🍿 Movies 🍿🍿 </h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
