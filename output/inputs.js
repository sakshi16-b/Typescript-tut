"use strict";
function getInfo() {
    console.log("get info calling");
    let nameInput = document.getElementById('username');
    let name = nameInput.value;
    let ageInput = document.getElementById('age');
    let age = ageInput.value;
    let emailInput = document.getElementById('email');
    let email = emailInput.value;
    console.log(name, age, email);
}
