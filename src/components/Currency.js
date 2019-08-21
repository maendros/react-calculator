import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Currency = ({ resultValue,selectCurrency }) => {



  const latestApi =
    "http://data.fixer.io/api/latest?access_key=ee78e01adc53bcf8728aecd0b7be1e5d";
  const [data, setData] = useState({rates: [] });
  const [selectedRate, setSelectedRate] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(latestApi);
      setData({ rates: [...Object.keys(result.data.rates)] });

    };
    fetchData();
  }, []);
//   const stateSelectionHandler = event => {
//     selectCurrency(event.target.value);
//     setSelectedRate(event.target.value);
//   };

  const convertCurrency = useCallback(async (e) => {
      console.log(e.target.value);
      console.log(selectedRate);
      
      setAmount(resultValue)
      console.log(amount);
    const convertApi =
    `http://data.fixer.io/api/convert?access_key=ee78e01adc53bcf8728aecd0b7be1e5d&from=${selectedRate}&to=${e.target.value}&amount=23`;
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    const result = await axios(convertApi);
    console.log(result)
    setSelectedRate(result.data.rate);
    selectCurrency(result.data.rate);
 
    setIsSending(false)
  }, [isSending]) 
  return (
    <select
      className="select-box"
      onChange={convertCurrency}
      value={selectedRate}
    >

      {data.rates !== undefined &&
        data.rates.map((rate, index) => (
          <option key={index} value={rate}>
            {rate}
          </option>
        ))}
    </select>
  );
};

export default Currency;
