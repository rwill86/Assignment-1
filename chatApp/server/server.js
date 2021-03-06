const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
//const mongoClient = require('monfodb').MongoCLient;
//const url = 'mongodb://localhost:27017';
//MongoClient.connect(url, {poolSize:10}, fucntion(err, client){
	 //if(err){
		 //return console.log(err);
	 //}
	 //const dbName = 'users';
	 //const db = client.db(dbName);
//});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/chatApp/')));
app.use(cors(corsOptions));
require('./auth.js')(app, fs);
require('./register.js')(app, fs);
require('./route.js')(app, path, fs);
require('./socket.js')(app, io);
require('./listen.js')(http);

var corsOptions = {
     origin: 'http://localhost:4200',
     optionSuccessStatus: 200
};

