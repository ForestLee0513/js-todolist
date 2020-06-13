//인풋 태그
const userInput = document.querySelector(".userInput"),
  form = document.querySelector(".js-form"),
  info = document.querySelector(".js-userInfo");

//유저 로컬 스토리지 이름
const USER_LS = "Username",
  SHOWING_CN = "showing";

//로컬 스토리지 저장
function saveLS(value) {
  localStorage.setItem(USER_LS, value);
}

function submitInput(e) {
  e.preventDefault();
  const currValue = userInput.value;
  paintName(currValue);
  saveLS(currValue);
}

function askName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", submitInput);
}

function paintName(value) {
  form.classList.remove(SHOWING_CN);
  info.classList.add(SHOWING_CN);
  info.innerHTML = `welcome ${value}`;
}

//로컬 스토리지 존재 여부 확인
function getLS() {
  const getUserLS = localStorage.getItem(USER_LS);
  if (getUserLS === null) {
    askName();
  } else {
    paintName(getUserLS);
  }
}

//기본 동작
function init() {
  getLS();
}

init();
