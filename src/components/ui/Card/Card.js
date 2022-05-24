import React from "react";
import { Link } from "react-router-dom";
import { imagePath } from "../../../utils/axios";
const Card = ({ data, path }) => {
  const { poster_path, title, id } = data;
  return (
    <Link to={path + "/" + id} className="movie">
      <img src={imagePath + poster_path} alt="" />
      <p>{title || data?.name}</p>
    </Link>
  );
};

export default Card;
