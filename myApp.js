var express = require("express");
var app = express();

// console.log("Hello World");
// app.get("/", function (req, res) {
//   var absolutePath = __dirname + "/views/index.html";
//   res.sendFile(absolutePath);
// });
// app.use("/public", express.static(__dirname + "/public"));
// app.get('/json', (req, res) => {
//   if(process.env['MESSAGE_STYLE'] === "uppercase") {
//   return res.json({"message":"HELLO JSON"});
//   } else {
//   return res.json({"message":"Hello json"});
//   }
// });

app.use(function(req, res, next) {
  var output = req.method+" "+req.path+" - "+req.ip
  console.log(output);
  next();
})

module.exports = app;
