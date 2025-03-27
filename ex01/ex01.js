const formElement = document.querySelector(".form");
const sayHelloElement = document.querySelector(".say-hello");
const inputNameElement = document.querySelector("#input-name");
const usernameElement = document.querySelector("#username");
const btnChangeElement = document.querySelector("#btn-change-name");

let userNameLocal = JSON.parse(localStorage.getItem("user")) || {};

function renderName() {
  if (userNameLocal.name) {
    usernameElement.textContent = userNameLocal.name;
    sayHelloElement.style.display = "flex";
    formElement.style.display = "none";
  } else {
    sayHelloElement.style.display = "none";
    formElement.style.display = "flex";
  }
}

renderName();

btnChangeElement.addEventListener("click", function () {
  sayHelloElement.style.display = "none";
  formElement.style.display = "flex";
});

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputNameValue = inputNameElement.value.trim();
  if (!inputNameValue) {
    inputNameElement.style.border = "1px solid red";
    inputNameElement.placeholder = "Vui lòng nhập tên!";
    return;
  }

  userNameLocal = { name: inputNameValue };
  localStorage.setItem("user", JSON.stringify(userNameLocal));

  renderName();
});
