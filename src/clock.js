//현재시간 받아오기
function getDate24() {
  const digital = document.querySelector(".clock24");
  const day = new Date();
  const hh = day.getHours();
  const mm = day.getMinutes();
  if (hh > 12) {
    digital.innerHTML = `PM ${hh % 12 < 10 ? `0${hh % 12}` : hh % 12}:${
      mm < 10 ? `0${mm}` : mm
    }`;
  } else {
    digital.innerHTML = `AM ${hh % 12 < 10 ? `0${hh % 12}` : hh % 12}:${
      mm < 10 ? `0${mm}` : mm
    }`;
  }
}

function analog() {
  const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}

//기본동작
function init() {
  getDate24();
  analog();
  setInterval(() => {
    getDate24();
    analog();
  }, 1000);
}

init();
