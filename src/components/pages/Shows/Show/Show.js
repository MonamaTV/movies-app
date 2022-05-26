import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance, { imagePath } from "../../../../utils/axios";
import Cast from "../../../ui/Cast/Cast";
import Modal from "../../../ui/Modal/Modal";
import "./Show.css";
const Show = () => {
  const { show } = useParams();
  const [showData, setShowData] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [credit, setCredit] = useState([]);
  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const [showInfo, creditInfo] = await Promise.all([
          axiosInstance.get("/tv/" + show),
          axiosInstance.get("/tv/" + show + "/credits"),
        ]);
        setShowData(showInfo.data);
        setCredit(creditInfo.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShowDetails();
  }, []);

  const handleModal = (url) => {
    setImgURL(url);
    setTrigger(!trigger);
  };

  if (!showData) return <h1>Loading...</h1>;
  return (
    <div className="bg-black">
      <div className="movie-container">
        <div className="movie-poster">
          <img src={imagePath + showData.poster_path} alt="" />
        </div>
        <div className="movie-content">
          <h2>{showData.name}</h2>
          <small>
            {showData.vote_average} rating | {showData.first_air_date} | Ep.
            length {showData.episode_run_time[0]}min{" "}
          </small>
          <p>{showData.overview}</p>
          <ul>
            <li>
              First episode <span> {showData.first_air_date}</span>
            </li>
            <li>
              Last episode <span> {showData.last_air_date}</span>
            </li>
            <li>
              Status <span> {showData.status}</span>
            </li>
            <li>
              No. of seasons: <span> {showData.number_of_seasons}</span>
            </li>
            <li>
              Based in: <span> {showData.origin_country[0]}</span>
            </li>

            <li>
              Language(s){" "}
              <span>
                {" "}
                {showData.spoken_languages.map(({ name }) => (
                  <span key={name}>
                    {name} {""}
                  </span>
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
      <div className="content-cast">
        <h2>Cast</h2>
        <div className="casts">
          {credit.map((cast) => {
            return (
              <Cast key={cast.credit_id} data={cast} modal={handleModal} />
            );
          })}
        </div>
      </div>
      {trigger && <Modal img={imgURL} action={() => setTrigger(false)} />}
    </div>
  );
};
export default Show;
