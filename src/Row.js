import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios.js";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

    // 1. Empty [] brackets only runs it once
    // 2. When the function within the effect is dependent on a variable
    // you have to specify it within the brackets so that it gets updated everytime
    // a value update takes place
  }, [fetchUrl]);

  console.table("movies:" + movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container -> poster */}
    </div>
  );
}

export default Row;
