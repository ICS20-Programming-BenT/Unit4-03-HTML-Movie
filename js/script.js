// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/19/2023
// This file contains the JS functions for index.html

"use strict"

// This function allows for a specific output when the user input text field is left empty
function isEmpty(str) {
  return !str || 0 === str.length;
}

// This function determines which movie rating the user can go and see alone based on their age
function AgeEntered() {

  // Setting constants: first age threshold is 17, second is 13, third is 5
  const FIRST_THRESHOLD = 17;
  const SECOND_THRESHOLD = 13;
  const THIRD_THRESHOLD = 5;

  // Define message that will bes displayed as result later on
  let message = "";
  
  // Get the user's age from input form
  let userAge = parseInt(document.getElementById("user-age").value);
  
  // First if statement: if user age is greater than or equal to 17, display that they can see an R-rated movie alone.
  if (userAge >= FIRST_THRESHOLD) {
    message = "You are old enough to see an R-rated movie on your own without supervision.";
  }
    
  // Otherwise, if age is greater than or equal to 13, display that they can see a PG-13 movie alone.
  else if (userAge >= SECOND_THRESHOLD) {
    message = "You can watch a PG-13 movie alone.";
  }
    
  // Otherwise, if age is greater than or equal to 5, display that they can see a G or PG movie alone.
  else if (userAge >= THIRD_THRESHOLD) {
    message = "You can see a G or PG movie on your own.";
  }

  // Otherwise, if age is less than 0, display that they must enter a valid age
  else if (userAge < 0) {
    message = "Please enter a valid number for your age.";
  }

  // Otherwise, if nothing is entered, display that they msut enter their age
  else if (isEmpty(userAge)) {
    message = "Please enter something for your age.";
  }
    
  //else (any age less than 5)
  else {
    message = "You need to be supervised to watch any movie. If you want to watch a movie, you should watch a movie with a parent or guardian.";
  }
  
  // Display the results to the user in the "results" div
  document.getElementById("results").innerHTML = message + " Thank you very much for using this tool to verify your age!";
}