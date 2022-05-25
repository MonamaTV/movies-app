import React from "react";
import { Link } from "react-router-dom";
import { imagePath } from "../../../utils/axios";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  const { title, release_date, overview, vote_average, backdrop_path, id } =
    movie;
  return (
    <div className="movie-card">
      <div className="movie-content">
        <h1>{title}</h1>
        <small>
          {release_date} | {vote_average} rating
        </small>
        <p>{overview}</p>
        <Link to={"/movies/" + id}>Learn More</Link>
      </div>
      <div className="movie-banner">
        <img src={imagePath + backdrop_path} alt="Some random stuff" />
      </div>
    </div>
  );
};

export default MovieCard;
