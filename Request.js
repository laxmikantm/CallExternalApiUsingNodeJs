const request = require('request');

// _EXTERNAL_URL = 'https://test-proj-heroku.herokuapp.com/api/plans';
// _EXTERNAL_URL =
//     'https://transit.api.here.com/v3/route.json?app_id=H2SIrKfRKU6LIf6fqJV8&app_code=elHKFkk16htHtPzBRFXdAQ&routing=all&dep=41.9773,-87.9019&arr=41.8961,-87.6552&time=2019-06-24T07%3A30%3A00';
_EXTERNAL_URL =
  'https://route.api.here.com/routing/7.2/calculateroute.json?app_id=H2SIrKfRKU6LIf6fqJV8&app_code=elHKFkk16htHtPzBRFXdAQwaypoint0=geo!52.5,13.4waypoint1=geo!52.5,13.45mode=fastest;car;traffic:disabled';

const callExternalApiUsingRequest = (callback) => {
  request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    console.log(body);
    return callback(body);
  });
};

module.exports.callApi = callExternalApiUsingRequest;
