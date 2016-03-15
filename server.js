// server.js
var express = require('express')
var app=express();
app.get('',function(req,res){
	res.send('Hello');
});

app.listen(80, function() {
  console.log('Docker DEMO with Node.js is running.')
})