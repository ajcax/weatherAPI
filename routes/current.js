const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
var request = require('request');
const config = require('../config');

// Middleware that is specific to this router
router.use((request, response, next) => {
    console.log('Processing the request in Current route...');
    next();
});


router.get('/:city?', (req, resp, next) => {
    console.log(req.params.city)
    let city = req.params.city;
    if (city) {
        fetch(`${config.externalApi.open_weather}weather?q=${city}&appid=${config.API_KEY}`)
            .then(res => res.json())
            .then(data => resp.json(data))
            .catch(err => {
                console.error(err);
            });
    } else {
        fetch(config.externalApi.ip_api)
            .then(res => res.json())
            .then(data => {
                request({ uri: `${config.externalApi.open_weather}weather?q=${data.city}&appid=${config.API_KEY}` })
                    .pipe(resp);
            })
            .catch(err => {
                console.error(err);
            });
    }

});

module.exports = router;