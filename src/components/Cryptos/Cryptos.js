import React, { useState } from "react";
import CryptoList from "../CryptoList/CryptoList";
import "./Cryptos.css";

const Cryptos = () => {
  const [numberOfRows, setNumberOfRows] = useState(100);
  let rowvalues = [];

  for (let i = 100; i > 0; i--) {
    rowvalues.push(i);
  }

  return (
    <div className="crypto-container">
      <div className="select-container space-between">
        <span>
          <button>
            <i className="far fa-star favorite"></i>Favourites
          </button>
          <button>CryptoCurrencies</button>
          <button>DeFi</button>
          <button>NFTs & Collectibles</button>
        </span>
        <span>
          <label htmlFor="show-rows">show rows</label>

          <select name="show-rows" id="show-rows">
            {rowvalues.map((i) => (
              <option
                key={i}
                value="numberOfRows"
                onClick={() => setNumberOfRows(i)}
              >
                {i}
              </option>
            ))}
          </select>
        </span>
      </div>
      <CryptoList numberOfRows={numberOfRows} />
    </div>
  );
};

export default Cryptos;
