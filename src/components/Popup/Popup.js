import React from "react";
import "./Popup.css";
import "../CryptoList/CryptoList.css";

const Popup = ({ cryptoDetails, setShowPopUp, isHigh }) => {
  const {
    image,
    name,
    current_price,
    market_cap,
    total_volume,
    circulating_supply,
    price_change_percentage_24h,
    price_change_percentage_7d_in_currency,
    symbol,
  } = cryptoDetails;

  return (
    <div className="popup">
      <div className="space-between popup-box">
        <h5>
          <img src={image} alt="currency" />
          {name}
        </h5>
        <i
          className="fas fa-2x fa-times"
          onClick={() => setShowPopUp(false)}
        ></i>
      </div>
      <div className="price-change flex popup-box">
        <div className="flex-coloumn">
          <p>PRICE</p>
          <p>{current_price}</p>
        </div>
        <div className="flex-coloumn">
          <p>24H</p>
          <p
            className={` ${
              isHigh(price_change_percentage_24h) ? "up" : "down"
            }`}
          >
            <i
              className={`fas fa-caret-${
                isHigh(price_change_percentage_24h) ? "up" : "down"
              }`}
            ></i>
            {price_change_percentage_24h?.toFixed(2)}%
          </p>
        </div>
        <div className="flex-coloumn">
          <p>7D</p>
          <p
            className={` ${
              isHigh(price_change_percentage_7d_in_currency) ? "up" : "down"
            }`}
          >
            <i
              className={`fas fa-caret-${
                isHigh(price_change_percentage_7d_in_currency) ? "up" : "down"
              }`}
            ></i>
            {price_change_percentage_7d_in_currency?.toFixed(2)}%
          </p>
        </div>
      </div>
      <div className="current-market-cap flex-coloumn popup-box">
        <p>MARKET CAP</p>
        <p>${market_cap}</p>
      </div>
      <div className="current-volume flex-coloumn popup-box">
        <p>VOLUME (24H)</p>
        <p>${total_volume}</p>
      </div>
      <div className="current-circulating-supply flex-coloumn popup-box">
        <p>CIRCULATING SUPPLY</p>
        <p>
          {circulating_supply} {symbol.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Popup;
