import React, { useState, useEffect } from "react";
import axios from "axios";

const Currency = ({ selectCurrency, resetCurrency ,operator}) => {
  
  const latestApi =
    "http://data.fixer.io/api/latest?access_key=ee78e01adc53bcf8728aecd0b7be1e5d";
  const [data, setData] = useState({ rates: [] });
  const [currency, setCurrency] = useState({ currency: "", rate: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(latestApi);
      setData({
        rates: [
          ...Object.keys(result.data.rates).map(e => ({
            currency: e,
            rate: result.data.rates[e]
          }))
        ]
      });
      setCurrency({ currency: "EUR", rate: 1 });
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (!resetCurrency) {
      setCurrency({ currency: "EUR", rate: 1 });
    }
  }, [resetCurrency]);
  const stateSelectionHandler = event => {
    setCurrency(event.target.value);
    selectCurrency(event.target.value,'€');
  };

  return (
    <select
      className="select-box"
      onChange={stateSelectionHandler}
      value={currency.rate}
      disabled={operator !== '' && operator!== '€'}
    >
      {data.rates !== undefined &&
        data.rates.map((rate, index) => (
          <option key={index} value={rate.rate}>
            {rate.currency}
          </option>
        ))}
    </select>
  );
};

export default Currency;
