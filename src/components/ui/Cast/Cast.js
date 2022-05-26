import React from "react";
import { imagePath } from "../../../utils/axios";

const Cast = ({ modal, data }) => {
  const { original_name, profile_path } = data;
  return (
    <div onClick={() => modal(profile_path)} className="cast">
      <img src={imagePath + profile_path} alt="" />
      <small>{original_name} </small>
    </div>
  );
};

export default Cast;
