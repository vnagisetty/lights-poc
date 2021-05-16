var awsIot = require('aws-iot-device-sdk');
 

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.
//
//
var device = awsIot.device({
	keyPath: "./aws/1b832b6910-private.pem.key",
   certPath: "./aws/1b832b6910-certificate.pem.crt",
	 caPath: "./aws/AmazonRootCA1.pem",
   clientId: "fromesp8266",
	   host: "aab5h1lv5fa7d-ats.iot.us-east-1.amazonaws.com"
 });
 
//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
/*
device
  .on('connect', function() {
    console.log('connected');
    device.subscribe('topic_1');
    device.publish('topic_2', JSON.stringify({ test_data: 1}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });
  */
  device
  .on('connect', function() {
    console.log('connected');
 
  });
  device
  .on('error', function() {
    console.log('Error', error);
 
  });
  device.subscribe("myTopic");
  device
  .on('message',function(topic,payload){
	  console.log('message',topic,payload.toString());
  });
  device.publish("yourTopic", JSON.stringify({message: 'hello'}));
