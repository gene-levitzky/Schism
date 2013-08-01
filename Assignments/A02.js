break break;
///////////////////
//// FUNCTIONS ////
///////////////////

/*
Functions execute a block of code. They can take parameters as "arguments", and they can even take other functions
as parameters. 
*/

function y (x) {
  return 2*x + 1;
}

var output = y(1); // output = 3
output = y(5); // output = 11
output = y(1/2); // output = 2
// ...

/*
Mathematically, the above funcion is equivalent to y = 2x + 1. Or y(x) = 2x + 1. Think of what the function "returns" as 
the functions output, and NOT as what's being "printed". The purpose of a function's "return" statement is for the program
to be able to retrieve the result of whatever the function computed.
*/

/*
Of course, not all functions carry out mathematical computations.
*/

function join (string1, string2) {
  return string1 + string2;
}

var output = join("cute", "cat");
console.log(output); // prints "cutecat"

/*
You can also use the output of a function as input to another function (or the same function).
*/

var output = join("cute", join(" ", "cat"));
console.log(output); // prints "cute cat"

/*
To evaluate this mentally, first replace the inner function with it's return value, which in this case would simply be " cat".
Then you have the equivalent statement: var output = join("cute", " cat"), which then becomes "cute cat".
*/

/**************
** EXERCISE 1 *
***************/

function complicatedFunction (x, y, z) {
  var a = x + y;
  var b = z / 2;
  
  return a * b;
}

var output = complicatedFunction(1, 1, 4);
// [5 pts] (1.1) output = ??

function complicatedFunction2 (x, y, z) {
  var a = x + y;
  var b = z / 2;
  
  console.log(a * b);
  
  return a + b;
}

var output = complicatedFunction2(1, 1, 4);
// [10 pts] (1.2) output = ??

var output = complicatedFunction2(complicatedFunction(2, 3, 6), 3, 6);
// [15 pts] (1.3) output = ??

function complicatedFunction3(x, y, z, a) {
  var result1 = complicatedFunction(x, y, z);
  var result2 = result1 < 20;
  
  return result2 == a;
}

var output = complicatedFunction3(2, 2, 8, false);

// [20 pts] 1.4 output = ??

/**************
** EXERCISE 2 *
***************/

/*
[20 pts] (2.1) Write a function called "fahrenheitToCelsius" that takes a single argument, fahrenheit, and returns the equivalent 
degrees in celsius. 
*/

/*
[20 pts] (2.2) Write a function called "get" that takes two arguments, an array and an index, and returns the element of the given 
array with the given index.
*/

/*
[10 pts] (2.3) Locate the error in the following code.
*/

function dayOfTheWeak (dayNumber) {
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  console.log(days[dayNumber]);
}

var currentDay = dayOfTheWeek(0);

// console.log(currentDay) prints "undefined" instead of Monday. Why?