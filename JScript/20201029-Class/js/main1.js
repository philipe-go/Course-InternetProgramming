//================ OBJECTS ================

//Type 1 ********* Literal Objects
var person = {
    firstName : "default",
    lastName : "default",
    age : 24,
    email : "default",
    children: ['child1', 'child2'], //array
    address: { //object inside object
        strname: "Street Name",
        strnbr: "99",
        postalCode: 'Z9Z 0Z0'
    },
    foo : function(){
        return this.address.strnbr + " " + this.address.strname + " - " + this.address.postalCode;
    }
};

console.log(person);
console.log(person.age);
console.log(person.firstName);

for (let i = 0; i < person.children.length; i++)
    console.log(person.children[i]);

console.log(person.address); //calling the object of an object
console.log(person.foo()); //calling a method

//Type 2 ********* Object Constructor

var apple = new Object();

apple.color = "Red";
apple.shape = "Round";
apple.weight = 100;

console.log(apple);

        // function declaration
apple.describe = function() {
    return "Apple = " + this.color + " " + this.shape + " - " + this.weight;
}

console.log(apple.describe());

//Type 3 ********* Constructor Pattern

function fruit(name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;

    this.describe = function() {
        return this.name + " " + this.color + " - " + this.weight;
    }
}

var orange = new fruit("orange", "orange", 100);
console.log(orange);
console.log(orange.describe());
var lemon = new fruit("lemon", "green", 50);
console.log(lemon);
console.log(lemon.describe());
