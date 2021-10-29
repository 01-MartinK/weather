document.addEventListener('DOMContentLoaded', cityWeather);

function weatherDataFetch( city ) {
  var key = '9570903009c5f9042b0f4ac81b142ad2';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  .then(function(resp) {
    return resp.json()
  }) // convert data to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch errors
  })
}

function cityWeather(e) {
  weatherDataFetch( 'Tallinn' )
}