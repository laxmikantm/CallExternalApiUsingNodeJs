const https = require('https');

// _EXTERNAL_URL = 'https://test-proj-heroku.herokuapp.com/api/plans';
_EXTERNAL_URL =
    'https://transit.api.here.com/v3/route.json?app_id=H2SIrKfRKU6LIf6fqJV8&app_code=elHKFkk16htHtPzBRFXdAQ&routing=all&dep=41.9773,-87.9019&arr=41.8961,-87.6552&time=2019-06-24T07%3A30%3A00';
// 'https://route.api.here.com/routing/routing/7.2/calculateroute.json?app_id=H2SIrKfRKU6LIf6fqJV8&app_code=elHKFkk16htHtPzBRFXdAQ&waypoint0=geo!52.5,13.4&waypoint1=geo!52.5,13.45&mode=fastest;car;traffic:disabled';

const callExternalApiUsingHttp = (callback) => {
    https
        .get(_EXTERNAL_URL, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                console.log(JSON.stringify(chunk));
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(JSON.stringify(data));
                return callback(data);
            });
        })
        .on('error', (err) => {
            console.log('Error: ' + err.message);
        });
};

module.exports.callApi = callExternalApiUsingHttp;
