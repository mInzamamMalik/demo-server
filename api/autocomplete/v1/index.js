var express = require("express");
var bodyParser = require("body-parser");

let app = express.Router();

app.use(function(req, res, next) {
    //   res.writeHead(404);
    res.json({
        from: "random app",
        version: "v1",
        res: "request not found"
    });
});
module.exports = app;