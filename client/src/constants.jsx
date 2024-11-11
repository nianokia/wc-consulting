import React from "react";

export const validateEmail = (email) => {
   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   return emailRegex.test(email);
}

export const showEmailError = (message) => {
   const emailError = document.getElementById("emailError");
   emailError.style.color = "red";
   emailError.innerText = message;
}

export const hideEmailError = () => {
   const emailError = document.getElementById("emailError");
   emailError.style.display = "none";
}

export const issueMapping = {
   'depression': 'Depression',
   'anxiety': 'Anxiety',
   'stress': 'Stress',
   'parenting': 'Parenting',
   'grief_loss': 'Grief/ Loss',
   'self_esteem': 'Self-Esteem',
   'life_challenges': 'Life Challenges',
   'anger': 'Anger Management',
   'relationship': 'Relationship Difficulties',
   'sports': 'Sports Perfomance'
}

export const raceMapping = {
   'aian': 'American Indian or Alaska Native',
   'asian': 'Asian',
   'black': 'Black or African-American',
   'pacific': 'Native Hawaiian or Other Pacific Islander',
   'middle_eastern': 'Middle Eastern or North African',
   'hispanic': 'Hispanic/ Latino',
   'white': 'White',
   'other': 'Other',
   'prefer_not_to_say': 'Prefer not to say'
}

export const genderMapping = {
   'man': 'Man',
   'woman': 'Woman',
   'non_binary': 'Non-binary',
   'transgender': 'Transgender',
   'other': 'Other',
   'prefer_not_to_say': 'Prefer not to say'
}

export const capitalizeFirstLetter = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
}