import "./App.css";
import Portfolios from "./components/Portfolios/Portfolios";
import Navbar from "./components/Navbar/Navbar";
import Cryptos from "./components/Cryptos/Cryptos";

function App() {
  return (
    <div className="container">
      <div id="App">
        <Navbar />
        <Portfolios />
        <div className="cryptoCurrency">
          <h3 className="heading">Top 100 Cryptocurrencies by Market Cap</h3>
          <Cryptos />
        </div>
      </div>
    </div>
  );
}

export default App;
