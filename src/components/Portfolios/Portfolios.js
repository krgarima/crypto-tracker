import React from "react";
import { data } from "../../backend/db/portfolioDb";
import SingePortfolio from "../SingePortfolio/SingePortfolio";
import "./Portfolios.css";

const Portfolios = () => {
  return (
    <div className="portfolios">
      {data.map((portfolioData) => {
        return <SingePortfolio portfolioData={portfolioData} />;
      })}
    </div>
  );
};

export default Portfolios;
