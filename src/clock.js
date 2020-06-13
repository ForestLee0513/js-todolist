//html 태그 불러오기
const clock = document.querySelector(".clock");

//현재시간 받아오기
function getDate() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

//기본동작
function init() {
  //초당 시간 갱신
  setInterval(() => {
    getDate();
  }, 1000);
}

init();
