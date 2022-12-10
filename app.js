const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();
const songs = require("./appSongs.js");
const ejs = require("ejs");
app.set("view engine",'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/",function(req,res){
    res.render("index",{songs:songs});
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running at server 3000");
});