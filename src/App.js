import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import ResultScreen from "./components/ResultScreen";
import ResultSmallScreen from "./components/ResultSmallScreen";
import { calculate } from "./utilities/Util";
import Currency from "./components/Currency";

function App() {
  const [result, setResult] = useState({
    total: "0",
    currentValue: "0",
    operator: "",
    readyForOperation: false
  });

  const handleValue = buttonVal => {
    setResult({ ...calculate(result, buttonVal) });
  };

  const convertCurrency = (e, symbol) => {
    setResult({ ...calculate(result, symbol, e) });
  };

  return (
    <div className="App">
      <div className="calculator-box">
        <div className="aux-box">
          <div className="item">
            <Currency
              resultValue={result.total}
              selectCurrency={convertCurrency}
              resetCurrency={result.readyForOperation}
              operator={result.operator}
            />
          </div>
          <div className="item">
            <ResultSmallScreen
              resultValue={result.currentValue}
              operator={result.operator}
            />
          </div>
        </div>

        <ResultScreen resultValue={result.total} />
        <Calculator handleClick={handleValue} />
      </div>
    </div>
  );
}

export default App;
