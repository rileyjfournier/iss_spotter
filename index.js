const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Return IP:", ip);
// });

// fetchCoordsByIP('184.64.176.106', (error, data) => {
//   if (error) {
//     console.log("Oh no! An error has occurred:", error);
//     return;
//   }
//   console.log("Success! Your coordinates are:", data);
// });

fetchISSFlyOverTimes({ latitude: 51.0207, longitude: -114.1011 }, (error, data) => {
  if (error) {
    console.log("An error occurred:", error);
    return;
  }
  console.log("You can see the ISS at these times:\n", data);
});