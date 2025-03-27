const btnRedElement = document.querySelector("#btn-red");
const btnBlueElement = document.querySelector("#btn-blue");
const btnYellowElement = document.querySelector("#btn-yellow");
const btnPurpleElement = document.querySelector("#btn-purple");
const bodyElement = document.querySelector("body");

let colorLocal = JSON.parse(localStorage.getItem("background")) || [];

function render() {
  const colorArray = colorLocal.map((item) => {
    return item.color;
  });
  bodyElement.style.backgroundColor = colorArray;
}

function saveColor(background) {
  colorLocal[0] = background;
  localStorage.setItem("background", JSON.stringify(colorLocal));
  render();
}

btnRedElement.addEventListener("click", function () {
  const background = {
    color: "#e74c3c",
  };
  saveColor(background);
});
btnBlueElement.addEventListener("click", function () {
  const background = {
    color: "#3498db",
  };
  saveColor(background);
});
btnYellowElement.addEventListener("click", function () {
  const background = {
    color: "#ffff00",
  };
  saveColor(background);
});
btnPurpleElement.addEventListener("click", function () {
  const background = {
    color: "#9b59b6",
  };
  saveColor(background);
});

render();
