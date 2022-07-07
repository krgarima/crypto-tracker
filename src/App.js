import "./App.css";
import Portfolios from "./components/Portfolios/Portfolios";
import Navbar from "./components/Navbar/Navbar";
import Cryptos from "./components/Cryptos/Cryptos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Portfolios />
      <div className="heading">Top 100 Cryptocurrencies by Market Cap</div>
      <Cryptos />
    </div>
  );
}

export default App;
