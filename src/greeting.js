const USER_LS = "Username";

function saveLS(obj) {
  localStorage.setItem(USER_LS, obj);
}

function getLS() {
  const getUserLS = localStorage.getItem(USER_LS);
  if (getUserLS === null) {
    console.log("its null");
  } else {
    console.log("not null");
  }
}

function init() {
  getLS();
}

init();
