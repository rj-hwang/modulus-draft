var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + "/", {index: "index.htm"}));
app.listen(port);
console.log('httpServer at http://localhost:' + port);