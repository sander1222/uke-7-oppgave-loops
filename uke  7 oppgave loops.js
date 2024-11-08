// OPPGAVE 1
//A loop in JavaScript repeats code as long as a condition is true, saving time and avoiding repetitive lines.

//OPPGAVE 2
//The main difference between a for loop and a while loop  is how and when they’re used:
//For loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// while loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

//OPPGAVE 3

//for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//while loop
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//OPPGAVE 4
// An infinite loop is a loop that keeps running endlessly because its exit condition is never met.
//This can happen by accident if the loop's condition always evaluates to true, meaning the loop has no way to stop.

//OPPGAVE 5
// const names = ["Gabriel", "Benjamin", "Mathias", "Sander"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

//OPPGAVE 6
//A do...while loop is a type of loop in programming that executes a block of code at least once before checking a condition.
// The key difference between a do...while loop and a regular while loop is when the condition is checked.

//OPPGAVE 7
//he break keyword in a loop is used to immediately exit the loop, stopping further iterations even if the loop's condition is still true

//OPPGAVE 8
//The continue keyword in a loop is used to skip the current iteration and immediately move to the next one, without terminating the entire loop.
//Unlike break, which stops the loop entirely

//OPPGAVE 9
// function fixArray(arr) {
//   if (arr.length === 0) return "";

//   let result = arr.join("").replace(/\s+/g, "").toLowerCase();

//   result = result.replace(/(^[a-z])|(\. [a-z])/g, (match) =>
//     match.toUpperCase()
//   );

//   return result;
// }

// let arr = [
//   "thIs",
//   "ArrAy",
//   "VERY",
//   "bad",
//   "pleasE",
//   "FIX",
//   "ME",
//   "Now",
//   " !!!",
// ];
// console.log(fixArray(arr));
