import React from "react";

import "./SingePortfolio.css";

const SingePortfolio = ({ portfolioData }) => {
  const { path, title, description } = portfolioData;
  return (
    <div className="portfolio-box">
      <div>
        <img src={`/assets/images/${path}`} alt="portfolio-img" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingePortfolio;
