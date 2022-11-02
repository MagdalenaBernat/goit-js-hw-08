"use strict";
const _ = require("lodash");


const form = document.querySelector("#feedback-form");
const input = document.querySelector("#input");
const LOCALSTORAGE_KEY = "feedback-form-state";

updateInput();
form.addEventListener("submit", saveData);

function saveData(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
  updateInput();
  form.reset();
}

function updateInput() {
  input.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}

localStorage.setItem("updateInput", updateInput);
localStorage.getItem("updateInput", updateInput);
