let button = document.getElementById("btn")! as HTMLButtonElement;
let input = document.getElementById("todoinput")! as HTMLInputElement;

button.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
