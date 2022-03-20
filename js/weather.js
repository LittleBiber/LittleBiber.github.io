const API_KEY = "46ef901de3b2efd51f01cc77ce74f69b";

function onGeoOK(position) {
  // 성공시 위치정보 콜백을 인자로 넘겨줘서 이렇게 출력이 가능함
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`Your position is ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child"),
        city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Cant find your location");
}

// 현재 위치의 데이터를 받아오기
// 성공 시 콜백, 실패 시 콜백을 인자로 받으며 성공시에는 콜백에 위치정보 객체를 인자로 넘겨줌
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

// 46ef901de3b2efd51f01cc77ce74f69b
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
