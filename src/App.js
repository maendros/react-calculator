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

  function handleValue(buttonVal) {
    setResult({ ...calculate(result, buttonVal) });
  }
  function handleSelect(e){
    
  }
  return (
    <div className="App">
      <div className="calculator-box">
        <div className="aux-box">
          <div className="item">
    
            <Currency resultValue={result.total}  selectCurrency={e => {
                  handleSelect(e);
                }}/>
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
