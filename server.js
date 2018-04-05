var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/lib',express.static(__dirname + '/lib'));
app.use('/template',express.static(__dirname + '/template'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));

app.listen(8000);

console.log("Running at Port 8000");