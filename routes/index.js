const express = require('express');
const router = express.Router();
const config = require('../config');

// Middleware to use for all requests
router.use((request, response, next) => {
    console.log('Processing the request...');
    next();
});

router.get('/', (request, response) => {
    response.contentType('application/json').status(200);
    response.json({ message: 'The Web Service is working correctly!', version: config.server.version });
    console.log(`The Web Service is working correctly! - Version: ${config.server.version}`);
    response.end();
});


router.use('/location', require('./location'));
router.use('/current', require('./current'));
router.use('/forecast', require('./forecast'));
module.exports = router;