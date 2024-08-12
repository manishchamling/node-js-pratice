const pdfDocument = require("pdfkit"); //here we including the pdfkit package 
const fs = require("fs");  //When we make a pdffile we need a file to store a text, image etc. So, here we include the fs(file system) module
//Creating a new document
const doc = new pdfDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream("output.pdf"));

// Embed a font, set the font size, and render some text
doc.fontSize(25).text("Hello World.", 100, 100);
// Including the image in the pdf 
doc.image("ms.jpg", {
  fit: [250, 300],
  align: "center",
  valign: "center",
});
// Finalize PDF file
doc.end();
