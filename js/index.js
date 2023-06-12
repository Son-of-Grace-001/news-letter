
let span = document.querySelector(".require");
let subBackground = document.querySelector(".subscribe");
let email = document.querySelector("#email");
email.addEventListener("keyup",check);

let input = document.querySelector(".mail");
input.innerHTML = email.innerHTML

var validRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function check(){

  if (!email.value.match(validRegex)) {
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.border = "1px solid hsl(4, 100%, 67%)";
    span.style.display = "block";
    subBackground.style.backgroundColor = "hsl(234, 29%, 20%)";
    return (false)
  }

  span.style.display = "none";
  email.style.color = "#000";
  subBackground.style.backgroundColor = "hsl(4, 100%, 67%)";
  email.style.border = "1px solid hsl(234, 29%, 20%)";
}

