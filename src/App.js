import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Navigation = lazy(() => import("./components/Navigation/Navigation.jsx"));
const HomePage = lazy(() => import("./views/HomePage.jsx"));
const NotFoundPage = lazy(() => import("./components/Page404/Page404.jsx"));
const MoviesPage = lazy(() => import("./views/MoviesPage.jsx"));
const MovieDetailPage = lazy(() => import("./views/MovieDetail.jsx"));

const loader = (
  <Loader
    type="Circles"
    color="rgba(200, 100, 25, 0.7)"
    height={80}
    width={80}
  />
);

export default function App() {
  return (
    <>
      <Suspense fallback={loader}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
