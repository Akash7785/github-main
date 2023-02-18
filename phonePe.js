let key = document.querySelectorAll("#keyboard>div");
let bag = "";
let enterbtn = document
  .querySelector("#submit")
  .addEventListener("click", loading);

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", enteredPin);
}

function loading() {
  let body = document.querySelector(".container");
  body.innerHTML = "";
  let img = document.createElement("img");
  img.setAttribute("id", "lodingGif");
  img.src = "https://media.tenor.com/joLYNfFQGDgAAAAj/loading.gif";
  let wait = document.createElement("p");
  wait.innerText = "Please Wait";
  wait.style.textAlign = "center";
  body.append(wait);
  body.append(img);
  img.style.marginTop = "75%";
  img.style.marginLeft = "40%";
  fetchBal();
}
function enteredPin(event) {
  let num = event.target.innerText;
  let pinbox = document.querySelectorAll("#input>input");
  for (let i = 0; i < pinbox.length; i++) {
    if (pinbox[i].value === "") {
      pinbox[i].value = num;
      bag = bag + pinbox[i].value;
      pinbox++;
    }
  }
}
function submit() {
  let pin = 1111;
  if (Number(bag) === pin) {
    console.log("Correct pin");
    return true;
  } else {
    console.log("Pin is incorrect");
    return false;
  }
}
function fetchBal() {
  let fetchingBalnce = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let fetched = false;
      fetched = submit();
      if (fetched) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    }, 5000);
  });

  fetchingBalnce.then(function (res) {
    window.location.href = "accountBal.html";
    // success(res);
    console.log(res);
  });

  fetchingBalnce.catch(function (err) {
    window.location.href = "error.html";
    console.log(err);
  });
}
