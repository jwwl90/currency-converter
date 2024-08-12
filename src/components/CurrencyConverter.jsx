import "./CurrencyStyling.css";
import { useEffect, useState, useContext } from "react";
import AppContext from "../AppContext";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(5);
  const [output, setOutput] = useState(3);
  const { fromCurrency, toCurrency } = useContext(AppContext);
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/2cded1f7871d92d0673979bc/pair/${fromCurrency}/${toCurrency}/${amount}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        setOutput(data.conversion_result);
      });
  }, [amount, fromCurrency, toCurrency]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };

  return (
    <div className="container">
      <input
        value={amount}
        placeholder="Enter amount"
        id="currentInput"
        onChange={handleChange}
      ></input>
      <p>{fromCurrency}</p>
      <p>=</p>
      <p id="currencyOuput">{output}</p>
      <p>{toCurrency}</p>
    </div>
  );
};

export default CurrencyConverter;
