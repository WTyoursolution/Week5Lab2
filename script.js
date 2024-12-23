"use script";

//Create a Website that solves 3 Javascript Problems
//#1 Smallest of Three Numbers

function minnumber() {
  let num1 = Number(prompt("please input number 1"));
  let num2 = Number(prompt("please input number 2"));
  let num3 = Number(prompt("please input number 3"));

  if (num1 < num2 && num1 < num3) {
    alert("the smallest number is " + num1);
  } else if (num2 < num1 && num2 < num3) {
    alert("the smallest number is " + num2);
  } else if (num3 < num1 && num3 < num2) {
    alert("the smallest number is " + num3);
  } else {
    alert("your input is invalid!!");
  }
}

minnumber();

//#2 POSITIVE NEGATIVE OR ZERO
function determine() {
  let yourNumber = Number(prompt("input a number value"));

  if (yourNumber > 0) {
    alert("your input is a positive number!!!");
  } else if (yourNumber < 0) {
    alert("your input is a negative number!!!");
  } else if (yourNumber === 0) {
    alert("your input is 0");
  } else {
    alert("YOUR INPUT IS INVALID!!!");
  }
}

determine();


//#3 VOTING ELIGIBLILITY
function eligibleToVote() {
    if (age >= 18) {
        alert("CONGRATS YOU ARE ELIGIBLE TO VOTE!");
    } else {
        alert("SORRY, YOU ARE NOT ELIGIBLE TO VOTE!!");
    }
}

let age = Number(prompt("Please enter your age:"));
eligibleToVote();
