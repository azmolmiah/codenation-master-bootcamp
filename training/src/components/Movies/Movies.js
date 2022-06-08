// Libraries
import React from "react";

// Components
import MoviePoster from "./MoviePoster";

// Resources
import ftws from "../../images/movies/ftws.jpg";
import otw from "../../images/movies/otw.jpg";
import st from "../../images/movies/st.jpg";
import tqg from "../../images/movies/tqg.jpg";
import tw from "../../images/movies/tw.jpg";

const Movies = () => {
  return (
    <div className="movie container">
      <MoviePoster src={ftws} alt="Fate The Winx Saga" />
      <MoviePoster src={otw} alt="Outside The Wire" />
      <MoviePoster src={st} alt="Star Trek Discovery" />
      <MoviePoster src={tqg} alt="The Queens Gambit" />
      <MoviePoster src={tw} alt="The Witcher" />
    </div>
  );
};

export default Movies;
