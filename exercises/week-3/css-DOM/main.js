// console.log(document)
const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

header.setAttribute("class", "my-header");

const subheader = document.createElement("h2");
subheader.innerHTML = "SubHeader";
document.body.appendChild(subheader);

subheader.setAttribute("class", "my-subheader");


const playingField = document.getElementById("playing-field");
console.log(playingField);

const down = document.getElementById("down");
console.log(down);


  const moveRight = function(){
    const ball = document.getElementById("ball");
    let left = parseInt(ball.style.left) || 0;
    left += 15;
    ball.style.left = left + "px";
}

const moveLeft = function(){
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  left -= 15;
  ball.style.left = left + "px";
}

const moveUp = function(){
  const ball = document.getElementById("ball");
  let up = parseInt(ball.style.top) || 0;
  up -= 15;
  ball.style.top = up + "px";
}

const moveDown = function(){
  const ball = document.getElementById("ball");
  let up = parseInt(ball.style.top) || 0;
  up += 15;
  ball.style.top = up + "px";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") {
      moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
    } else if (event.key === "ArrowRight") {
      moveRight();
  }
});