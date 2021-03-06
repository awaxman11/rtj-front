var gzippo = require('gzippo');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));           // log every request to the console
app.use(bodyParser());  
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);