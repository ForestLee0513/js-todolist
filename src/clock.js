//html 태그 불러오기
const clock24 = document.querySelector(".clock24");

//css 스타일
const show = "show";

//현재시간 받아오기
function getDate24() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  clock24.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

//기본동작
function init() {
  getDate24();
  setInterval(() => {
    getDate24();
  }, 1000);
}

init();
