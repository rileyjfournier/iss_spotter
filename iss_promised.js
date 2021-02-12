const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  let obj = {};
  obj.latitude = JSON.parse(body).latitude;
  obj.longitude = JSON.parse(body).longitude;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${obj.latitude}&lon=${obj.longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const rTimes = new Date(0);
    rTimes.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${rTimes} for ${duration} seconds!`)
  }
};

module.exports = { nextISSTimesForMyLocation, printPassTimes };