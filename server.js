/**
 * Created by Tobi on 02/12/2016.
 */
var express = require ("express");
var morgan = require ("morgan");
var path = require ("path");


var app = express ();

app.use(morgan("short"));

// set up static file middleware - every req goes through and continues if no file are found
var staticPath = path.join (__dirname, "view");
app.use(express.static(staticPath));

//called when a request to the root is made

app.get("/", function (req,res) {
    res.render("index");
});

//called when a request to /about

app.get("/about", function (req,res) {
    res.end("Welcome to my home");
});

//etc.

app.get("/stats", function (req,res) {
    res.end ("stats");
});

//if error page

app.use(function(req,res) {
    res.statusCode=404;
    res.end("404");
});

app.listen(3000);





