const server = {
    version: '0.0.1',
    environment: process.env.NODE_ENV,
    host: process.env.HOSTNAME,
    httpPort: process.env.WS_SERVER_HTTP_PORT,
    splitter: ',',
    system: 'WeatherAPI!'
};
const API_KEY = '5236c5abb0d6cdb8499ff5f549fd4804';

const externalApi = {
    open_weather: 'http://api.openweathermap.org/data/2.5/',
    ip_api: 'http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone',
};

exports.server = server;
exports.API_KEY = API_KEY;
exports.externalApi = externalApi;