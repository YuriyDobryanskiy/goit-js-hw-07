function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    const color = getRandomHexColor();

    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = color;

    boxesArray.push(box);
  }

  boxes.innerHTML = boxesArray.map(({ outerHTML }) => outerHTML).join("");
  controls.querySelector("input").value = "";
}
function destroyBoxes() {
  boxes.innerHTML = "";
}

//Create button
createButton.addEventListener("click", () => {
  const amount = Number(controls.querySelector("input").value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});
//Destroy button
destroyButton.addEventListener("click", destroyBoxes);
