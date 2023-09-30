import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatingMovies from "../hooks/useTopRatingMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custom Hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/*
          MainContainer
            - Video Background
            - Video Title
          SecondaryContainer
            - MovieList * n
              - Cards * n
      */}
    </div>
  );
};

export default Browse;
