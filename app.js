let body = document.querySelector('body');

let request = new XMLHttpRequest();
request.open('Get', 'https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=8efe3d38493d5c5f2b5649e1e1980c38');
request.send();
request.addEventListener('load', function () {
  if (request.status == 200 || request.readyState == 4) {
    let {
      main,
      wind,
      weather
    } = JSON.parse(request.responseText);
    let [objofweather] = weather;
    let html = `
      <div class="container">
        <div class="container__info">
           <h1 class="container__info--Country background">Baku(Azerbaijan)</h1> 
           <div class="container__info--TemContainer">
              <h2 class="container__info--Tem background">${Math.round(main.temp - 273)}°C</h2> 
              <img class="container__info--TemImg" src='http://openweathermap.org/img/wn/${objofweather.icon}@2x.png' alt="Icon" >
           </div> 
           <p class="container__info--Additional background">Real feel : ${Math.round(main.feels_like - 273)}°C</p>
           <p class="container__info--Additional background">Wind speed : ${wind.speed} m/s</p> 
           <p class="container__info--Additional background">Humidity : ${main.humidity} %</p> 
           <p class="container__info--Additional background">Pressure : ${main.pressure}mbar</p> 
        </div> 
      </div>
    `;
    body.innerHTML += html;
    let container = document.querySelector('.container');
    let time = new Date();
    if (time.getHours() >= 18) {
      container.style.backgroundImage = ' url("img/19talk-baku-slide-W3M5-superJumbo.jpg")';
    } else {
      container.style.backgroundImage = ' url("img/Baku-blend-Azerbaijan-skyscrapers-buildings.jpg")';
    }
  }
});