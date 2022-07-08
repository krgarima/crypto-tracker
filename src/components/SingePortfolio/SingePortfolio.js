import React from "react";
import "./SingePortfolio.css";

const SingePortfolio = ({ portfolioData, showPortfolioID }) => {
  const { _id, path, title, description } = portfolioData;

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
