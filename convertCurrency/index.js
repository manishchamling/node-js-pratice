const CC = require("currency-converter-lt");
const fromCurrency = "USD";
const toCurrency = "NPR";
const amountToConvert = 1;

const currencyConverter = new CC({
  from: fromCurrency,
  to: toCurrency,
  amount: amountToConvert,
});
currencyConverter.convert().then((response) => {
  console.log(
    `${amountToConvert} ${fromCurrency} is equal to ${response} ${toCurrency}`
  );
});
