// ==================== NaN =========================
//This function checks if the variable has any number independent of it is a string number or a number type

var val1=12;
var val2="12";
var val3="Apple";

console.log("====NaN====");
console.log(typeof(val1));
console.log("Not a Number: "+isNaN(val1));
console.log(typeof(val2));
console.log("Not a Number: "+isNaN(val2));
console.log(typeof(val3));
console.log("Not a Number: "+isNaN(val3));


// ==================== STRING =========================
//JavaScript initially considers all types as string

var msg1 = 'my string 1 - I\'m a string'; //take care and use the scape character due to the ' in the phrase
var msg2 = "my stringt 2";

console.log("====STRING====")
console.log(msg1);
console.log("Length: "+msg1.length);
console.log("to upper: "+msg1.toUpperCase());
console.log("to lower: "+msg1.toLowerCase());
console.log(msg2);
console.log("Length: "+msg2.length);
console.log("index of: "+msg2.indexOf('t')); //this method tells the first occurence of the parameter
console.log("index of starting [5, length[: "+msg2.indexOf('t',5)); //this second argument tell form which index the method should start

console.log("slice: "+msg2.slice(0, msg2.indexOf(" "))); //slice from the being (0) to the end (indexOf(" "))
console.log("slice 2: "+msg2.slice(10,msg2.length));

var tags = "beef, pork, fish, shrimp";
var tagArr = tags.split(", ");
console.log("non splitted: "+tags);
console.log("splitted var to array: ");
console.log(tagArr);

