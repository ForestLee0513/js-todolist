function setImage() {
  const API_URL = "https://source.unsplash.com/1920x1080/?nature,mountain";
  const body = document.querySelector("body");

  body.style.backgroundImage = `url(${API_URL})`;
}

function init() {
  setImage();
}

init();
