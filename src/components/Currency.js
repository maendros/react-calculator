import React, { useState, useEffect } from "react";
import axios from "axios";

const Currency = ({ selectCurrency }) => {
  const latestApi =
    "http://data.fixer.io/api/latest?access_key=ee78e01adc53bcf8728aecd0b7be1e5d";
  const [data, setData] = useState({ rates: [] });
  const [currency, setCurrency] = useState("EUR");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(latestApi);
      console.log(result)
      setData({ rates: [...Object.keys(result.data.rates)] });
    };
    fetchData();
  }, []);
  const stateSelectionHandler = event => {
    selectCurrency(currency, event.target.value);
    setCurrency(event.target.value);
  };

  return (
    <select
      className="select-box"
      onChange={stateSelectionHandler}
      value={currency}
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
