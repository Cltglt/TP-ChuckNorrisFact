'use strict';

function getName() {
    let name = document.querySelector("#name").value;
    console.log("name");
}

let btn = document.querySelector('#btn');
btn.addEventListener("click", getName);