import React, { useEffect, useState } from "react";
import axiosInstance, { imagePath } from "../../../../utils/axios";
import { useParams } from "react-router-dom";
import "./Movie.css";
import Cast from "../../../ui/Cast/Cast";
import Modal from "../../../ui/Modal/Modal";
const Movie = () => {
  const { movie } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieInfo, creditInfo] = await Promise.all([
          axiosInstance.get("/movie/" + movie),
          axiosInstance.get("/movie/" + movie + "/credits"),
        ]);
        setMovieData(movieInfo.data);
        setCredit(creditInfo.data.cast);
        console.log(creditInfo.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, []);

  if (!movieData) return <h1>Loading...</h1>;

  const handleModal = (url) => {
    setImgURL(url);
    setTrigger(!trigger);
  };

  return (
    <div className="bg-black">
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
      <div className="content-cast">
        <h2>Cast</h2>
        <div className="casts">
          {credit.map((cast) => {
            return <Cast key={cast.cast_id} data={cast} modal={handleModal} />;
          })}
        </div>
      </div>
      {trigger && <Modal img={imgURL} action={() => setTrigger(false)} />}
    </div>
  );
};
export default Movie;
