import React from "react";


export const validateEmail = (email) => {
   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   return emailRegex.test(email);
}


export const showEmailError = (message) => {
   const emailError = document.getElementById("emailError");
   emailError.style.color = "red";
   emailError.innerText = message;
   emailError.style.marginLeft = "10px";
}


export const hideEmailError = () => {
   const emailError = document.getElementById("emailError");
   emailError.style.display = "none";
}
