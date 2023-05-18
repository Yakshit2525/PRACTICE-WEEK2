var express = require("express");
var app = express();


require("dotenv").config();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;


app.get("/",function(req, res){
res.sendFile(path.join(__dirname,"./views/home.html"));
});
// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.send("Hello World<br /><a href='/about'>Go to the about page boyyy</a>");
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    res.send("<h3>About Yakshit Aggarwal</h3>");
});

app.get("/home", function(req,res){
    res.send("<h3>That's my home page</h3>");
});


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => {  // FUNCTION EXPRESSION
  console.log("Express http server listening on: " + HTTP_PORT);
});