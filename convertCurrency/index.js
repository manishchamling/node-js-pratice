const CC = require("currency-converter-lt");
const http = require("http");
const convert = (amount, from, to) => {
  const server = http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" }); //file type
      const currencyConverter = new CC();
      currencyConverter
        .from(from)
        .to(to)
        .amount(amount)
        .convert()
        .then((response) => {
          res.end(`${amount} ${from} is equal to ${response} ${to}`);
        });
    })
    .listen(8000);
};
convert(1, "JPY", "INR");
console.log("App is running");
