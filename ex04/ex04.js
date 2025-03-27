const modeElement = document.querySelector("#mode-icon");
const bodyElement = document.querySelector("body");

let modeLocal = JSON.parse(localStorage.getItem("mode")) || [{ mode: "light-mode" }];

if (modeLocal[0].mode === "dark-mode") {
    bodyElement.classList.add("dark-mode");
}

modeElement.addEventListener("click", function () {
    if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
        modeLocal[0] = { mode: "light-mode" };
    } else {
        bodyElement.classList.add("dark-mode");
        modeLocal[0] = { mode: "dark-mode" };
    }

    localStorage.setItem("mode", JSON.stringify(modeLocal));
});
