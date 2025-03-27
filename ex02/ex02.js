const vote1Element = document.querySelector("#vote1");
const vote2Element = document.querySelector("#vote2");
const vote3Element = document.querySelector("#vote3");
const btn1Element = document.querySelector("#btn1");
const btn2Element = document.querySelector("#btn2");
const btn3Element = document.querySelector("#btn3");

let voteLocal = JSON.parse(localStorage.getItem("votes")) || {
  first: 0,
  second: 0,
  third: 0,
};

function render() {
    vote1Element.innerHTML = `<span class="material-symbols-outlined"> favorite </span> <span>${voteLocal.first}</span> lượt thích `;
    vote2Element.innerHTML = `<span class="material-symbols-outlined"> favorite </span> <span>${voteLocal.second}</span> lượt thích `;
    vote3Element.innerHTML = `<span class="material-symbols-outlined"> favorite </span> <span>${voteLocal.third}</span> lượt thích `;
}


btn1Element.addEventListener("click", function () {
    voteLocal.first++;
    localStorage.setItem("votes", JSON.stringify(voteLocal));
    render();
});
btn2Element.addEventListener("click", function () {
    voteLocal.second++;
    localStorage.setItem("votes", JSON.stringify(voteLocal));
    render();
});
btn3Element.addEventListener("click", function () {
    voteLocal.third++;
    localStorage.setItem("votes", JSON.stringify(voteLocal));
    render();
});

render();