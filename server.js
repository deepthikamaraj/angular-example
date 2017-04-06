var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
var index = require('./routes/index');

 
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
//static 
app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.listen(process.env.PORT || 3000);
console.log("Listening at port 3000...");
