import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests.js";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Best Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Best comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Best action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Best horror movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
