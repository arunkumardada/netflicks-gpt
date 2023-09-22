import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import Header from "./Header";

const Browse = () => {
  // Custom Hook
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
