function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEY = '80809292fdadddc077091dca7b2a10fa';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url).then(response => response.json()).then(data => {
    const name = data.name;
    const weather =  data.weather[0].main;
    const weatherContainer = document.querySelector('#weather span:first-child');
    const cityContainer = document.querySelector('#weather span:last-child');

    cityContainer.innerText = name;
    weatherContainer.innerText = `${weather} / ${data.main.temp}`;

    
    
  });
   

}
function onGeoError() {
  alert("Can't find u.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError) 


