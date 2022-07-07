import React from "react";

import "./SingePortfolio.css";

const SingePortfolio = ({ portfolioData }) => {
  const { id, path, title, description } = portfolioData;
  return (
    <div className="portfolio-box">
      <div>
        <img src={`/assets/images/${path}`} alt="portfolio-img" srcset="" />
      </div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingePortfolio;
