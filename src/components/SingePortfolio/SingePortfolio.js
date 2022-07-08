import React from "react";

import "./SingePortfolio.css";

const SingePortfolio = ({ portfolioData, showPortfolioID }) => {
  const { _id, path, title, description } = portfolioData;
  console.log("showPortfolioID", showPortfolioID);
  console.log("id", _id);
  return (
    <div
      className="portfolio-box"
      id={showPortfolioID !== _id ? "hidePortfolio" : "showPortfolio"}
    >
      <div>
        <img src={`/assets/images/${path}`} alt="portfolio-img" />
      </div>
      <div className="details">
        <p className="title">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingePortfolio;
