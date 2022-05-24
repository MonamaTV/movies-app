import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import Trending from "../../ui/Trending/Trending";
import "./Movies.css";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: results } = await axiosInstance.get("/movie/popular");
        setMovies(results.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { results },
      } = await axiosInstance.get("/search/movie", {
        params: {
          query,
        },
      });
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="search">
        <input
          value={query}
          onChange={handleInput}
          type="text"
          placeholder="Search movies..."
        />
        <button onClick={searchMovies}>Search</button>
      </div>
      <Trending path={"/movies"} title="Latest movies" data={movies} />
    </div>
  );
};

export default Movies;
