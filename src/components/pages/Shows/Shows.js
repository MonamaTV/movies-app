import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import Trending from "../../ui/Trending/Trending";
import "./Shows.css";
const Shows = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: results } = await axiosInstance.get("/tv/popular");
        console.log(results);

        setShows(results.results);
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

  const searchShows = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { results },
      } = await axiosInstance.get("/search/tv", {
        params: {
          query,
        },
      });
      setShows(results);
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
          placeholder="Search TV shows..."
        />
        <button onClick={searchShows}>Search</button>
      </div>
      <Trending title="Latest TV shows" data={shows} path={"/shows"} />
    </div>
  );
};

export default Shows;
