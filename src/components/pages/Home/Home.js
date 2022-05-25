import React, { useState, useEffect } from "react";
import axiosInstance from "../../../utils/axios";
import MovieCard from "../../ui/MovieCard/MovieCard";
import Trending from "../../ui/Trending/Trending";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([
          axiosInstance.get("/movie/popular"),
          axiosInstance.get("/tv/popular"),
        ]);
        const [apiMovies, apiShows] = response;
        setShows(apiShows.data.results);
        setMovies(apiMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return movies.length > 0 ? (
    <div className="home-container">
      <MovieCard movie={movies[Math.floor(Math.random() * 19 + 1)]} />
      <Trending
        path="/movies"
        title="Trending Movies"
        data={movies.slice(0, 12)}
      />
      <Trending
        path="/shows"
        title="Trending Shows"
        data={shows.slice(0, 12)}
      />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
