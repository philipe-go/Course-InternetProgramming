// ======================= RULES and SYNTAX =====================
/*
- Case sensitive language -> myName != MyName
- no sensitive to white space -> ignores spaces, tabs, etc.MyName
- close statementes with a ;
- it is an INTERPRETER language
- reads the code from top to bottom -> line by line
- naming convention: letters - digits - dollar sign - underscore
- Camel Case naming: variables are descriptive (firstName)
*/

// =======================  DATA TYPE  =====================
/*
- Losely type (var)
- undefined
- null
- number
- string
- array
- objects
*/

// GLOBAL VARIABLES
var myVarName = "Test";
var myVar = 10;

console.log(myVarName);
console.log(typeof(myVarName));
console.log(myVar);
console.log(typeof(myVar));

// LOCAL VARIABLES
let localVar = 9.99;
console.log(localVar);
console.log(typeof(localVar));

// CONSTANT VARIABLES
const pi = 3.141615;
console.log(pi);
console.log(typeof(pi));

//the following throws an uncaught typeError as "pi" is a const
//pi = 3.45;

// =======================  MATHEMATICS  =====================
// + - % / *

console.log("===MATHS===");
console.log(myVar + localVar);
console.log(myVar - localVar);
console.log(myVar * localVar);
console.log(myVar / localVar);
console.log(myVar % localVar);

// IMPORTANT - behing the scene every type is casted to a string
console.log(myVar + " Hello");
// NaN error
console.log(myVar * " Hello");

console.log(myVar += 1);
console.log(myVar *= 1);
console.log(myVar -= 1);
console.log(myVar /= 1);
console.log(myVar %= 1);

// ---- Prefix and Postfix operator
var num_1 = 10;
console.log(num_1);
console.log(num_1++);
console.log(num_1);
console.log(++num_1);

// =======================  LOGICAL  =====================

//----- Boolean and Comparison
var iLikeJS = true;
console.log("LOGICAL");
console.log(iLikeJS);
console.log(num_1 == myVar);
console.log(num_1 != myVar);
console.log(num_1 > myVar);
console.log(num_1 < myVar);
console.log("=======");
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean("c"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(" "));
console.log("=======");
console.log(5 == "5");
console.log(5 != "5");
// IMPORTANT - check the value and the data type with a triple equal sign
console.log("triple ===");
console.log(5 === "5");
console.log("triple !==");
console.log(5 !== "5");

