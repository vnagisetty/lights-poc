var field = "message";

var obj = {};
var  deviceId=1; 

var command=1; 

obj[field] = 'hello';
obj["deviceId"] = deviceId;
obj["command"] = command;
var myJSON = JSON.stringify(obj);
console.log(myJSON);
console.log(JSON.stringify({ message: "hello" }));
