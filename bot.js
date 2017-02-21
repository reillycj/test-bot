var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);

  /*{
  "attachments": [],
  "avatar_url": "http://i.groupme.com/123456789",
  "created_at": 1302623328,
  "group_id": "1234567890",
  "id": "1234567890",
  "name": "John",
  "sender_id": "12345",
  "sender_type": "user",
  "source_guid": "GUID",
  "system": false,
  "text": "Hello world ☃☃",
  "user_id": "1234567890" 
}*/
  
  var testString = "raindrop";

  if(request.text && request.text.toLowerCase().indexOf(testString) > -1) {
    this.res.writeHead(200);
    var message = "Droptop";
    postMessage(message);
    this.res.end();
  } else if (request.text && request.name == "Nasty") {
    this.res.writeHead(200);
    var message = "Nate you salty bruh";
    postMessage(message);
    this.res.end();
  } else if (request.text && request.name == "Murray") {
    this.res.writeHead(200);
    var message = "My man Money Murray";
    postMessage(message);
    this.res.end();
  } else if (request.text && request.name == "Josh Ryan") {
    this.res.writeHead(200);
    var message = "Fuck you Josh";
    postMessage(message);
    this.res.end();
  } else {
    this.res.writeHead(200);
    this.res.end();
  }


function postMessage(message) {
  var botResponse, options, body, botReq;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : message
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;