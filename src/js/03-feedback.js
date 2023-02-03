"use strict";
const _ = require("lodash");

const localStorageKey = "feedback-form-state";
let formState = localStorage.getItem(localStorageKey);

if (!formState) { 
  formState = {};
  localStorage.setItem(localStorageKey, JSON.stringify(formState));
} else {
  formState = JSON.parse(formState);
};
  
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector(".feedback-form");

const inputContent = (event) => {
  const currentState = JSON.parse(localStorage.getItem(localStorageKey));
  localStorage.setItem(localStorageKey, JSON.stringify({ ...currentState, [event.target.name]: event.target.value }));
};

const submitForm = (event) => { 
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.setItem(localStorageKey, "{}")
  form.reset();
  event.preventDefault();
};

emailInput.addEventListener("input", _.throttle(inputContent, 500));
messageInput.addEventListener("input", _.throttle(inputContent, 500));
form.addEventListener("submit", submitForm);
emailInput.value = formState.email??null;
messageInput.value = formState.message??null;




