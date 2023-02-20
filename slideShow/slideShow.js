document.querySelector("#start").addEventListener("click", startFunc);
document.querySelector("#pause").addEventListener("click", pauseFunc);

counter = 0;
let id;
function startFunc() {
  let images = JSON.parse(localStorage.getItem("images"));

  let container = document.getElementById("container");
  container.innerHTML = "";

  let img = document.createElement("img");

  img.src = images[counter];
  container.append(img);
  counter++;

  id = setInterval(function () {
    if (counter === images.length) {
      counter = 0;
    }
    img.src = images[counter];
    // console.log(counter);
    container.append(img);
    counter++;
  }, 3000);
}
function pauseFunc() {
  console.log("paused", counter);
  // console.log();
  clearInterval(id);
}
