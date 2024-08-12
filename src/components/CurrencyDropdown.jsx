import "./CurrencyStyling.css";
import { useEffect, useState, useContext } from "react";
import AppContext from "../AppContext";

const CurrencyDropdown = () => {
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const { setFromCurrency, setToCurrency } = useContext(AppContext);

  useEffect(() => {
    //fetch("https://v6.exchangerate-api.com/v6/2cded1f7871d92d0673979bc/codes")
    //.then((response) => response.json())
    //.then((data) => console.log("data: ", data));
    let data = {
      result: "success",
      documentation: "https://www.exchangerate-api.com/docs",
      terms_of_use: "https://www.exchangerate-api.com/terms",
      supported_codes: [
        ["AED", "UAE Dirham"],
        ["AFN", "Afghan Afghani"],
        ["ALL", "Albanian Lek"],
        ["AMD", "Armenian Dram"],
        ["ANG", "Netherlands Antillian Guilder"],
        ["AOA", "Angolan Kwanza"],
      ],
    };
    setCurrencyCodes(data.supported_codes);
  }, []);

  const handleFromCurrencyChange = (event) => {
    console.log(event.target.value);
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    console.log(event.target.value);
    setToCurrency(event.target.value);
  };

  return (
    <div className="container">
      <p>I want to convert</p>
      <select
        name="currency"
        id="currencySelect"
        onChange={handleFromCurrencyChange}
      >
        {currencyCodes.map((code) => {
          return <option value={code[0]}>{code[0]}</option>;
        })}
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
      <p>to</p>
      <select
        name="currency"
        id="currencySelect"
        onChange={handleToCurrencyChange}
      >
        {currencyCodes.map((code) => {
          return <option value={code[0]}>{code[0]}</option>;
        })}
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
