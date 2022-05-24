import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance, { imagePath } from "../../../../utils/axios";
import "./Show.css";
const Show = () => {
  const { show } = useParams();
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const { data } = await axiosInstance.get("/tv/" + show);
        console.log(data);
        setShowData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShowDetails();
  }, []);

  if (!showData) return <h1>Loading...</h1>;
  return (
    <div className="movie-container">
      <div className="movie-poster">
        <img src={imagePath + showData.poster_path} alt="" />
      </div>
      <div className="movie-content">
        <h2>{showData.name}</h2>
        <small>
          {showData.vote_average} rating | {showData.release_date} |{" "}
        </small>
        <p>{showData.overview}</p>
        <ul>
          <li>
            Status <span> {showData.status}</span>
          </li>
          <li>
            Budget <span> {showData.budget}</span>
          </li>
          <li>
            Revenue <span> {showData.revenue}</span>
          </li>
          <li>
            Language(s){" "}
            <span>
              {" "}
              {showData.spoken_languages.map(({ name }) => (
                <span key={name}>{name}</span>
              ))}
            </span>
          </li>
        </ul>
        <div className="genres">
          {showData.genres.map(({ name }) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Show;
