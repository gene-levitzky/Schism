break break;
///////////////////
//// VARIABLES ////
///////////////////

/*
Like in python, and unlike in java, javascript does not have typed variables. There's no ints doubles or strings.
Unlike python though, to declare a variable in javascript, you have to use the "var" keyword. Like:
*/

var x = 1;

console.log(x); // prints "1"

/*
"console.log" is the function used to print to the console.
It's javascript's equivalent to java's "System.out.println"
and python's "print".
*/

/*
Also like python, and unlike java, variables can be reassigned to any type.
A variable that was cast as one type can be recast as any other type.
So we can take the x from above, which right now is an int, and redeclare
it as a string.
*/

x = "Now it's a string";

console.log(x); // prints "Now it's a string"

x = 'you can also use single quotes for strings';

/*
Javascript's operators + - * / % behave as you'd expect. The only big difference between javascript and both
python and java is that in javascript division, /, behaves like normal division NOT integer division. So, 
7/2 = 3.5, instead of 3 as it would in python and java. Otherwise there should be no surprises.
*/

/***************
** EXERCISE 1 *
***************/

var x = 5 / 2;

// [5 pts] (1.1) x = 2


var y = 5 % 2;

// [5 pts] (1.2) y = 2.5


var z = (32 % (1 + (7 % 5))) - 2;

// [10 pts] (1.3) z = 11.33



/*
Boolean operators are identical to those in java. For comparing equality, use ==. For inequality, use !=. 
For comparisons, use >, >=, <=, <. Finally, && is logical "and", || is logical "or", and ! is logical negation.
*/  

/***************
** EXERCISE 2 *
***************/

var a = !true || (!false && true);

// [5 pts] (2.1) a = true

var b = false || (!false && false) || (true && (false || !false));

// [10 pts] (2.2) b = true

var c = a && b;

// [5 pts] (2.3) c = true

var d = 5 > -18;

// [5 pts] (2.4) d = true

var e = (5 > 4) == ((true == (0 != 1)) || false);

// Hint: (x > y), (x >= y), (x == y), etc, always returns either true or false.
// Hint2: Replace the inner most parentheses with their boolean (true or false) evaluation. 
//        Repeat process until a single boolean remains.

// [15 pts] (2.5) e = true






/*
Lists are very easy to make in javascript. You simply enclose a sequence of variables separated by commas with [ ].

(Actually, in most programming languages this type of data structure is referred to as an "array", and "list" means 
something slightly different.)
*/

var myArray = ["this", 'is', "a", 'list'];

/*
You can access elements of an array by using myArray[index], where myArray is your array variable, and index is the position
of that element in the list. So myArray[2] is "a" (remember that counting starts at 0.
*/

console.log(myArray[0] + " " myArray[3]) // should print "this list". Remember that "+" concatenates strings.

/*
You can also create associative arrays which are essentially regular arrays, but the indexes (indices?) are variables.
*/

var myArray = new Array();

myArray["key"] = "value";
myArray["cat"] = "cute";
myArray["boston"] = "massachusetts";
myArray["albany"] = "new york";

/***************
** EXERCISE 3 *
***************/

var array = [true, 0, "random string", 5, 3];

// [5 pts] (3.1) For which indexes, x, would array[x] NOT be a number? 
// ANS: 0,2

// For this question, use myArray from above 
var x = myArray["cat"];

console.log(x); // [5 pts] (3.2) Prints cute (naturallys)

/***************
** EXERCISE 4 *
***************/

var array = [1, 2, 3, 4];
var a = (true == (false || !true)) && ((array[2] > (5 / 2)) == true);

// [10 pts] (4.1) a = false

var array = [(4 < (8/3)), (!true || (false || ((2/3 > 0) != false)))];
var b = (array[0] && (array[0] == array[1]));

// [20 pts] (4.2) b = false
//Kitten works (hmphs): 
	// [(4 < 2) --> false
	// [false, (!true || (false || (false) != false)))]
	// [false, (!true || (false || false)]
	// [false, (!true || false)]
	// [false, false]
	// var b = (false && (false == false))
	//		 = (false && true)
	//		 =  false (hmphs!)

// Hint: First simplify the values inside the array. Replace array[0] and array[1] with their equivalent boolean statements. 
// then replace. Remember that if x is not equal to y, then x != y is TRUE. 

// For partial credit, write down as much of the above as you can in simplified form.