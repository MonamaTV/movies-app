import React, { useEffect, useState } from "react";
import axiosInstance, { imagePath } from "../../../../utils/axios";
import { useParams } from "react-router-dom";
import "./Movie.css";
const Movie = () => {
  const { movie } = useParams();
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axiosInstance.get("/movie/" + movie);
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, []);

  if (!movieData) return <h1>Loading...</h1>;

  return (
    <div className="movie-container">
      <div className="movie-poster">
        <img src={imagePath + movieData?.poster_path} alt="" />
      </div>
      <div className="movie-content">
        <h2>{movieData.title}</h2>
        <small>
          {movieData.vote_average} rating | {movieData.release_date} |{" "}
          {movieData.runtime} min duration
        </small>
        <p>{movieData.overview}</p>
        <ul>
          <li>
            Status <span>{movieData.status}</span>
          </li>
          <li>
            Budget <span>${movieData.budget?.toLocaleString()}</span>
          </li>
          <li>
            Revenue <span>${movieData.revenue?.toLocaleString()}</span>
          </li>
          <li>
            Language(s){" "}
            <span>
              {movieData?.spoken_languages?.map(({ name }) => name + ". ")}
            </span>
          </li>
        </ul>
        <div className="genres">
          {movieData?.genres?.map(({ name }) => (
            <p key={name}>{name}. </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Movie;
