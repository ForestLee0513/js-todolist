//인풋 태그
const userInput = document.querySelector(".userInput"),
  userForm = document.querySelector(".js-form"),
  userInfo = document.querySelector(".js-userInfo"),
  toDoForm = document.querySelector(".js-toDoForm"),
  toDoList = document.querySelector(".js-toDoList");

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
  userForm.classList.add(SHOWING_CN);
  userForm.addEventListener("submit", submitInput);
}

function paintName(value) {
  userForm.classList.remove(SHOWING_CN);
  userInfo.classList.add(SHOWING_CN);
  userInfo.innerHTML = `welcome ${value}`;
  toDoForm.classList.add(SHOWING_CN);
  toDoList.classList.add(SHOWING_CN);
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
