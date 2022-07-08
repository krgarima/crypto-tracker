import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "../Popup/Popup";
import "./CryptoList.css";
import "../Popup/Popup.css";

const CryptoList = ({ numberOfRows }) => {
  const [data, setData] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(10);
  const [showPopUp, setShowPopUp] = useState(false);
  const [cryptoDetails, setCryptoDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${numberOfRows}&page=${currentPageNumber}&sparkline=false&price_change_percentage=24h%2C7d`
        );
        setData(data);
      } catch (error) {
        console.log("Please refresh! Some error has occured.");
      }
    })();
  }, [numberOfRows, currentPageNumber]);

  const handlePageRight = () => {
    if (pageStart >= pageEnd) return;
    else {
      if (pageStart >= 7) return;
      else if (pageStart < 7) {
        setPageStart(pageStart + 2);
        if (pageEnd <= 8) setPageEnd(pageEnd + 2);
      }
    }
  };

  const handlePageLeft = () => {
    if (pageStart >= pageEnd) return;
    else {
      if (pageEnd < 5) return;
      else if (pageEnd >= 5) {
        setPageEnd(pageEnd - 2);
        if (pageStart >= 2) setPageStart(pageStart - 2);
      }
    }
  };

  const isHigh = (value) => {
    return value >= 0 ? true : false;
  };

  return (
    <section className="crypto-list">
      <hr className="row-line" />
      <div className="headings">
        <h5 className="market-rank">#</h5>
        <h5 className="crypto-data">NAME</h5>
        <h5 className="crypto-data price">PRICE</h5>
        <h5 className="crypto-data lastTwentyFourHours">24H &uarr;</h5>
        <h5 className="crypto-data lastSevenDays">7D</h5>
        <h5 className="crypto-data market-cap">MARKET CAP</h5>
        <h5 className="crypto-data volume">VOLUME(24H)</h5>
        <h5 className="crypto-data circulating-supply">CIRCULATING SUPPLY</h5>
      </div>
      <hr className="row-line" />
      <div className="table">
        {data?.length > 0 ? (
          data?.map((cryptocurrency) => {
            const {
              id,
              image,
              name,
              current_price,
              market_cap_rank,
              market_cap,
              total_volume,
              circulating_supply,
              price_change_percentage_24h,
              price_change_percentage_7d_in_currency,
              symbol,
            } = cryptocurrency;
            return (
              <div
                className="row"
                key={id}
                onClick={() => {
                  setCryptoDetails(cryptocurrency);
                  setShowPopUp(true);
                }}
              >
                <i className="far fa-star favorite"></i>

                <span className="market-rank">{market_cap_rank}</span>
                <span className="crypto-data center name">
                  <img src={image} alt="currency" />
                  {name} <span className="symbol">{symbol.toUpperCase()}</span>
                </span>
                <span className="crypto-data price">${current_price}</span>
                <span
                  className={`crypto-data lastTwentyFourHours ${
                    isHigh(price_change_percentage_24h) ? "up" : "down"
                  }`}
                >
                  <i
                    className={`fas fa-caret-${
                      isHigh(price_change_percentage_24h) ? "up" : "down"
                    }`}
                  ></i>
                  {price_change_percentage_24h?.toFixed(2)}%
                </span>
                <span
                  className={`crypto-data lastSevenDays ${
                    isHigh(price_change_percentage_7d_in_currency)
                      ? "up"
                      : "down"
                  }`}
                >
                  <i
                    className={`fas fa-caret-${
                      isHigh(price_change_percentage_7d_in_currency)
                        ? "up"
                        : "down"
                    }`}
                  ></i>
                  {price_change_percentage_7d_in_currency?.toFixed(2)}%
                </span>
                <span className="crypto-data market-cap">${market_cap}</span>
                <span className="crypto-data volume">${total_volume}</span>
                <span className="crypto-data circulating-supply">
                  {circulating_supply} {symbol.toUpperCase()}
                  <hr className="line outerline" />
                  <hr className="line innerline" />
                </span>
                <i className="fas fa-ellipsis-v"></i>
                <hr className="row-line" />
              </div>
            );
          })
        ) : (
          <i className="fas fa-5x fa-circle-notch  fa-spin"></i>
        )}
      </div>
      <div className="pages">
        <button
          id={pageEnd <= 4 ? `disabled` : `notDisabled`}
          disabled={pageEnd <= 4}
          onClick={handlePageLeft}
        >
          <i className="fas fa-angle-left"></i>
        </button>
        <button onClick={() => setCurrentPageNumber(pageStart)}>
          {pageStart}
        </button>
        <button onClick={() => setCurrentPageNumber(pageStart + 1)}>
          {pageStart + 1}
        </button>
        <button>...</button>
        <button onClick={() => setCurrentPageNumber(pageEnd - 1)}>
          {pageEnd - 1}
        </button>
        <button onClick={() => setCurrentPageNumber(pageEnd)}>{pageEnd}</button>

        <button
          id={pageStart >= 7 ? `disabled` : `notDisabled`}
          disabled={pageStart >= 7}
          onClick={handlePageRight}
        >
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
      {showPopUp ? (
        <Popup
          cryptoDetails={cryptoDetails}
          setShowPopUp={setShowPopUp}
          isHigh={isHigh}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default CryptoList;
