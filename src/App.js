import React, { useState, useCallback } from "react";
import axios from "axios";
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
  const [isSending, setIsSending] = useState(false);

  const handleValue = buttonVal => {
    setResult({ ...calculate(result, buttonVal) });
  };
  const convertCurrency = useCallback(
    async (fromCurrency, toCurrency) => {
      const convertApi = `http://data.fixer.io/api/convert?access_key=ee78e01adc53bcf8728aecd0b7be1e5d&from=${fromCurrency}&to=${toCurrency}&amount=${
        result.total
      }`;
      if (isSending) return;

      setIsSending(true);

      const response = await axios(convertApi);
      console.log(response.data.result);
      setResult({ ...result, total: response.data.result})
      setIsSending(false);
    },
    [isSending, result]
  );

  return (
    <div className="App">
      <div className="calculator-box">
        <div className="aux-box">
          <div className="item">
            <Currency
              resultValue={result.total}
              selectCurrency={convertCurrency}
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
