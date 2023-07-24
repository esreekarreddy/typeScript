"use strict";
let button = document.getElementById("btn");
let input = document.getElementById("todoinput");
console.log(button.getAttribute("id"));
button.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
