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

// app.use(function(req, res, next) {
//   var output = req.method+" "+req.path+" - "+req.ip
//   console.log(output);
//   next();
// })

// app.get('/now', function(req, res, next) {
//   req.time = new Date().toString();
//   next();
// }, function(req,res) {
//   return res.json({"time": req.time})
// });

app.get("/:word/echo", function (req, res) {
  return res.json({ echo: req.params.word });
});

app
  .route("/name")
  .get(function (req, res) {
    return res.json({ name: req.query.first + " " + req.query.last });
  })
  .post(function (req, res) {
    return res.json({ name: req.query.first + " " + req.query.last });
  });

module.exports = app;
