document.querySelector("button").addEventListener("click", storeImage);

let images = JSON.parse(localStorage.getItem("images")) || [];
function storeImage() {
  let url = document.getElementById("url").value;

  images.push(url);
  localStorage.setItem("images", JSON.stringify(images));
}
console.log(images);
