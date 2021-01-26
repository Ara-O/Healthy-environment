"use strict";

//initializing the different elements ( verification message and button )
const verification = document.querySelector(".verification");
const formcta = document.querySelector(".formcta");

//adding an event listener to the form button
formcta.addEventListener("click", function () {
  verification.classList.add("verificationanimation");
});
