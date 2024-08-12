const QRCode = require("qrcode"); //first we need a package to create a qr code so we here install the qrcodde package 
const http = require("http"); //when we create a qrcode throught the qrcode package. that qrcode should be in the browser . so  to create a new server we need a http module. here we include the http module. http is the built-in module of node.js.
// QRCode.toDataURL("https://googel.com", (err, url) => {
//   if (err) console.log(err);
//   console.log(url);
// });
const Server = http.createServer((req, res) => { //here we create a new server through the http module.
  res.writeHead(200, { "Content-Type": "text/html" });  //
  QRCode.toDataURL("https://googel.com", (err, url) => { //Simply here we createa a qrcode of google and create a arror function in the arrow function we pass the parameter err, and url. In the arrow function we create control flow (if) and we give the condition if we get error then the program say error.
    if (err) console.log(err);
    res.end(`<img src ="${url}"/>`); //here the server end the response.
    JSON.stringify({
      data: url,
    });
  });
});
Server.listen(5000);
console.log("App is running");
