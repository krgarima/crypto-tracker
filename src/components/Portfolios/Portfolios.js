import React from "react";
import { data } from "../../backend/db/portfolioDb";
import SingePortfolio from "../SingePortfolio/SingePortfolio";
import "./Portfolios.css";

const Portfolios = () => {
  return (
    <div className="portfolios">
      <i className="fas nav-portfolio fa-chevron-circle-left"></i>
      {data.map((portfolioData) => {
        return <SingePortfolio portfolioData={portfolioData} />;
      })}
      <i className="fas nav-portfolio fa-chevron-circle-right"></i>
    </div>
  );
};

export default Portfolios;
