var express = require("express");
var bodyParser=require("body-parser");

var PORT=process.env.PORT || 3000;

var app=express();

// serve static content for the app from the "public" directory in the app directory
app.use(express.static("public"));

// parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// parse application /json
app.use(bodyParser.json());


//set HandleBars.
var exphbs=require("express-handlebars");

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

// Import routes for controllers
var routes=require("./controllers/burgers_controller.js");

app.use(routes);

// start our servers so that it can start listening to clients requests
app.listen(PORT,function(){
    console.log("Server listening on http://localhost on PORT: ",PORT)
});
