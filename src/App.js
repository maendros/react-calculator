import React, { useState } from "react";

import "./App.css";
import Calculator from "./components/Calculator";
import ResultScreen from "./components/ResultScreen";
import { calculate } from "./utilities/Util";

function App() {
  const [result, setResult] = useState({
    total: "0",
    currentValue: "0",
    operator: '',
    readyForOperation : false
  });
  // function handleValue(buttonVal) {
  //   return setResult({ total: calculate(result.total, buttonVal) });
  // }
  function handleValue(buttonVal) {
    return setResult({ ...calculate(result, buttonVal) });
  }

  return (
    <div className="App">
      <div className="calculator-box">
        <ResultScreen resultValue={result.total} />
        <Calculator handleClick={handleValue} />
      </div>
    </div>
  );
}

export default App;
