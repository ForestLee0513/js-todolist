//좌표 로컬 스토리지
const COORDS = "coords";

//API 관련 설정
const API_KEY = "241f71bb5e809bbfd036e6edf757b540";

//날씨 관련 html 태그
const temp = document.querySelector(".weather_temp");
const place = document.querySelector(".weather_place");

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=ko_kr`
  )
    .then(function (responce) {
      return responce.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const currPlace = json.name;
      temp.innerText = `${temperature}°C`;
      place.innerText = `${currPlace}`;
    });
}

//좌표값 저장
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//좌표값 없을 시 좌표값 받아오기
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

//좌표값 에러 핸들링
function handleGeoError() {
  console.log("Cant Access GEO Location");
}

//좌표값 성공 핸들링
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

//좌표값 존재 여부 확인
function getCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

//기본 동작
function init() {
  getCoords();
}

init();
