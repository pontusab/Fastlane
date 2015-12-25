// enable ES6 (transpiling behind the scene)
require('babel-register');

// load out .env file into process.env before anything else
require('dotenv').load();

// start frontend server
require('./src/server.js');

// start api server
require('./api/server.js');
