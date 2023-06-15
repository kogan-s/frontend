const container = document.getElementById("container");
const colors = ["red", "green", "blue", "yellow", "purple"];
const boxes = [];

for (let i = 0; i < colors.length; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  boxes.push(box);
  container.appendChild(box);

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;

  box.onmouseenter = function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
    checkSameColor();
  };
}

const message = document.createElement("div");
message.textContent = "Nice job!";
message.style.display = "none";
container.appendChild(message);

function checkSameColor() {
  const boxColors = boxes.map(box => getComputedStyle(box).backgroundColor);
  const allSameColor = boxColors.every(color => color === boxColors[0]);

  if (allSameColor) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}
