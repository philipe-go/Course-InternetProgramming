//============= CONDITIONAL STATEMENT ========== if - if else - switch

console.log("=======CONDITIONAL STATEMENT=======");

var youLikeProgramming = true;

console.log("IF");
if (youLikeProgramming) { console.log("Hello JavaScript"); }
console.log("Done!");

youLikeProgramming = false;

console.log("IF - ELSE");
if (youLikeProgramming) { console.log("Hello JavaScript"); }
else { console.log ("Not a programmer"); }
console.log("Done!");

console.log("PARALLEL IF - ELSE");
var myAge = "29";
if (myAge > 30) { console.log("Older than 30");}
else if (myAge == 30) { console.log("30 years old");}
else if (myAge < 0) { console.log("invalid age");}
else {console.log("younger than 30");}

console.log("NESTED IF - ELSE");
var aNum = 22;
checkNumber(aNum); //function call
aNum = 20;
checkNumber(aNum); //function call
checkNumber(21); //function call

console.log("SWITCH");
var fruit = "apple";
console.log(fruit);
checkFruit(fruit); //function call

// ==================== LOGICAL =========================

var age = 20;
var name = "Phil";

console.log("=====LOGICAL OPERATORS=====");
if (age > 18 && age < 60 || name != "") console.log("Enter allowed");
else console.log("Enter refused");

// ==================== LOOP STATEMENT ========================= while - for - forEach

var myColors = ["Red", "Blue", "Gray"];
console.log("=======LOOP=======")

console.log("FOR")
for (let i = 0; i < myColors.length; i++)
{
    console.log(myColors[i]);
}

console.log("WHILE") //while is used when the programmer does not known how many times to iterate
var counter = 0;
while (counter < myColors.length)
{
    console.log(myColors[counter]);
    counter++;
}

console.log("FOREACH") //foreach in JavaScript is a method that takes an anonymous function (such as lambda expressions in c#)
var grades = [79.5, 86.9, 90.5, 100];
grades.forEach(g => {
    console.log(g);
});

// ==================== FUNCTIONS =========================

console.log("====FUNCTION avg====")
console.log(checkAvg(2,10));


function checkNumber(num){
    if (num % 2 == 0)
    {
        console.log("It is an even number");
        if (num  % 5 == 0) {console.log("And is a factor of 5");}
        else console.log("But is not a factor of 5");
    }
    else console.log("The number is an odd number");
}

function checkFruit(fruit){
    switch (fruit){
        case "apple": console.log("sweet"); break;
        case "lemon": console.log("nasty"); break;
        case "orange": console.log("niiice"); break;
        default: console.log("undefined"); break;
    }
}

function checkAvg(a,b){
    return (a+b)/2;
}
