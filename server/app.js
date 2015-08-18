//var express = require("express");
//var app = express();
//var index  = require("./routes/index");
//var bodyParser = require('body-parser');
//
//var server = app.set("port", (process.env.PORT || 5000));
//
//app.listen(app.get("port"), function() {
//    var port = server.address().port;
//    console.log("Listening on port: ", port);
//});
//
//app.use(bodyParser.json());
//app.use("/", index);
//
//module.exports = app;

var express = require('express');
var app = express();

var index = require('./routes/index');

app.use('/', index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;
