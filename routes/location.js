const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const config = require('../config');

// Middleware that is specific to this router
router.use((request, response, next) => {
    console.log('Processing the request in Location route...');
    next();
});

router.get('/', (req, resp, next) => {
    fetch(config.externalApi.ip_api)
        .then(res => res.json())
        .then(data => resp.json(data))
        .catch(err => {
            console.error(err);
        });
});

module.exports = router;