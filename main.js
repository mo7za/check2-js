let body = document.querySelector("body");
let button = document.querySelector("button");
let colors = ["red", "pink", "yellow", "green", "black", "orange"];
// body.style.backgroundColor = "orange";
function randomcolor() {
  let hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}
button.addEventListener("click", function () {
  console.log(randomcolor());
  body.style.backgroundColor = randomcolor();
});
