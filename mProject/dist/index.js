"use strict";
let button = document.getElementById("btn");
let input = document.getElementById("todoinput");
button.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
