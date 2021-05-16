//jhint esversion:6
const express = require('express');
const app = express();
app.get("/",function(req, res){
	res.send("hello world")
//res.sendFile(__dirname + "/index.html");
});

app.listen(80,function(){
  console.log("sever started on 3000 port");
});