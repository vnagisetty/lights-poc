//jhint esversion:6

const express = require('express');
const bodyParser=require('body-parser');
var message =  require("./startMQTT");
const app = express();

var device =message.startMQTT(); 

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/",function(req, res){
res.sendFile(__dirname + "/index.html");
//res.sendFile(__dirname + "/test.html");
});

app.post("/",function(req,res){
	console.log("POST message" );
	console.log(req.body.custId);
//	console.log(req);
//	res.sendFile(__dirname + "/index.html");
	if(req.body.custId=='ON'){
		console.log("turning on.." );
		message.push2device(1,1,device);
		res.sendFile(__dirname + "/on.html");

	}
	else{
		console.log("turning off.." );
		message.push2device(1,0,device);
		res.sendFile(__dirname + "/index.html");
	}
	//res.send('this is a response from server');

});
	// app.post("/ON",function(req,res){
	// 	console.log("POST message" );
	// 	console.log(req.body);
	// 	//res.send("got the message");
	// 	message.push2device(1,1,device);
	// 	});
	// app.post("/OFF",function(req,res){
	// 	console.log(" is OFF");
	// 	message.push2device(1,0,device);
	// 	});
		
   // res.sendFile(__dirname + "/index.html");
		
//* test1

//	console.log(req);

app.listen(3000,function(){
  console.log("sever started on 3000 port");
});