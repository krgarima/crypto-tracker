import React, { useState } from "react";
import { data } from "../../backend/db/portfolioDb";
import SingePortfolio from "../SingePortfolio/SingePortfolio";
import "./Portfolios.css";

const Portfolios = () => {
  const [showPortfolioID, setShowPortfolioID] = useState(1);

  const showNextPortfolio = () => {
    showPortfolioID < data.length
      ? setShowPortfolioID((portfolio) => portfolio + 1)
      : setShowPortfolioID(1);
  };

  const showPrevPortfolio = () => {
    showPortfolioID > 1
      ? setShowPortfolioID((portfolio) => portfolio - 1)
      : setShowPortfolioID(data.length);
  };

  return (
    <div className="portfolios">
      <i
        className="fas nav-portfolio fa-chevron-circle-left"
        onClick={showPrevPortfolio}
      ></i>
      {data.map((portfolioData) => {
        return (
          <SingePortfolio
            portfolioData={portfolioData}
            showPortfolioID={showPortfolioID}
          />
        );
      })}
      <i
        className="fas nav-portfolio fa-chevron-circle-right"
        onClick={showNextPortfolio}
      ></i>
    </div>
  );
};

export default Portfolios;
