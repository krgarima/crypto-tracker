import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoList.css";

const CryptoList = ({ numberOfRows }) => {
  // const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(10);

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

  // console.log(data);
  console.log("pageStart", pageStart);
  console.log("pageEnd", pageEnd);

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

  return (
    <section className="crypt-list">
      <div className="headings">
        <h5 className="favorite">.</h5>
        <h5 className="market-rank">#</h5>
        <h5 className="crpyto-data name">NAME</h5>
        <h5 className="crpyto-data price">PRICE</h5>
        <h5 className="crpyto-data lastTwentyFourHours">24H &darr;</h5>
        <h5 className="crpyto-data lastSevenDays">7D</h5>
        <h5 className="crpyto-data market-cap">MARKET CAP</h5>
        <h5 className="crpyto-data volume">VOLUME(24H)</h5>
        <h5 className="crpyto-data circulating-supply">CIRCULATING SUPPLY</h5>
      </div>
      <div className="table">
        {data?.length > 0 ? (
          data?.map((cryptocurrency) => {
            const {
              id,
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
              <div key={id}>
                <i className="far fa-star favorite"></i>

                <span className="market-rank">{market_cap_rank}</span>
                <span className="crpyto-data center name">{name}</span>
                <span className="crpyto-data price">${current_price}</span>
                <span className="crpyto-data lastTwentyFourHours">
                  {price_change_percentage_24h?.toFixed(3)}%
                </span>
                <span className="crpyto-data lastSevenDays">
                  {price_change_percentage_7d_in_currency?.toFixed(3)}%
                </span>
                <span className="crpyto-data market-cap">${market_cap}</span>
                <span className="crpyto-data volume">${total_volume}</span>
                <span className="crpyto-data circulating-supply">
                  {circulating_supply} {symbol}
                </span>
                <i className="fas fa-ellipsis-v"></i>
              </div>
            );
          })
        ) : (
          <i className="fas fa-5x fa-circle-notch  fa-spin"></i>
        )}
      </div>
      <div className="pages">
        <button disabled={pageStart <= 2} onClick={handlePageLeft}>
          <i className="fas fa-angle-left"></i>
        </button>
        {/* {pageNumber.map((current) => (
          <button key={current} onClick={() => setCurrentPageNumber(current)}>
            {current}
          </button>
        ))} */}
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

        <button disabled={pageEnd >= 8} onClick={handlePageRight}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default CryptoList;
