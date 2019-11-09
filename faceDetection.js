'use strict';

// SERVER
const request = require('request');
const express = require('express');
const app = express();
const port = 3000;

app.get('*', (req, res) => {
	res.sendFile(__dirname + req.url); 
});
app.listen(port, ()=>{
	console.log('App is listening on port ' + port);
});

// Azure Face API
const subscriptionKey = '';	
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';

// Request parameters.
const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

/*
request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});
*/