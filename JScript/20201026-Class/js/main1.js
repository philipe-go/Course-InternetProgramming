console.log("=======ARRAY=======");

var Colors=['Blue', 'Red', 'Green'];

console.log(Colors[0]);
console.log(Colors[1]);
console.log(Colors[2]);

Colors[0] = 20;

console.log(Colors);
Colors[2] = ['New','Inside','Array'];
console.log(Colors);

var myColors = new Array("Constructor", "Array", 300, 20.2);
console.log(myColors);

myColors.push("Pushed");
console.log(myColors);
console.log(myColors.pop());
console.log(myColors.length);
//sort() modify the original value of the array (indexed elements)
console.log(myColors.sort());
//reverse() modify the original value of the array (indexed elements)
console.log(myColors.reverse());
console.log(myColors);

console.log("=======NUMBERS - Math=======");

var myAge = 32;
var yourAge = "32";
var aValue = 32.5;

console.log(myAge);
console.log(typeof(myAge));
console.log(yourAge);
console.log(typeof(yourAge));
console.log(aValue);
console.log(typeof(aValue));

console.log(yourAge + aValue);
console.log(yourAge == myAge);
console.log(myAge + aValue);

console.log("=======MATH OPS=======");

console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.max(myAge, aValue));
console.log(Math.min(myAge, aValue));