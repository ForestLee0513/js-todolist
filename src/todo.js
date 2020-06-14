const toDoInput = document.querySelector(".toDoInput");

//로컬 스토리지 이름
const TODO_LS = "toDoList",
  GREETING_LS = "Username";

const SHOWING = "showing";

//로컬스토리지 저장용 Array
let toDoArray = [];

//로컬 스토리지 저장
function saveToDoLS(obj) {
  localStorage.setItem(TODO_LS, JSON.stringify(obj));
}

function handleToDoInput(e) {
  e.preventDefault();
  const currValue = toDoInput.value;
  paintToDo(currValue);
  toDoInput.value = "";
}

//투 두 리스트 삭제
function deleteToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDoArray.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });

  toDoArray = cleanToDo;

  saveToDoLS(toDoArray);
}

//투 두 리스트 표시
function paintToDo(value) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDoArray.length + 1;
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = value;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const obj = {
    value: value,
    id: newId,
  };
  toDoArray.push(obj);
  saveToDoLS(toDoArray);
}

//로컬스토리지 존재 여부 확인
function getToDoLS() {
  const getToDo = localStorage.getItem(TODO_LS);
  if (getToDo !== null) {
    const parsedToDo = JSON.parse(getToDo);
    parsedToDo.forEach((a) => {
      paintToDo(a.value);
    });
  }
}

//기본 동작
function init() {
  getToDoLS();
  toDoForm.addEventListener("submit", handleToDoInput);
}

init();
