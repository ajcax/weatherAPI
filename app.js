const express = require('express');
const dotenv = require('dotenv').config();
const config = require('./config');
const routes = require('./routes/index');

const app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log('A new request arrived at the Web Service...');
    next();
});

app.use('/v1', routes);
app.listen(config.server.httpPort);
module.exports = app;

console.log(`Environment: ${config.server.environment}`);
console.log(`WeatherAPI Serving at http://${config.server.host}:${config.server.httpPort}/v1`);