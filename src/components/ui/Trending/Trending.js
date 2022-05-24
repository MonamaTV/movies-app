import React from "react";
import Card from "../Card/Card";
import "./Trending.css";
const Trending = ({ title, data, path }) => {
  return (
    <div className="trending">
      <h3 className="title">{title}</h3>
      <div className="movies">
        {data.map((card) => {
          return <Card key={card.id} data={card} path={path} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
