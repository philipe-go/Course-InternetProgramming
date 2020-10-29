// =============== DOM - Document Object Model ==============

//Document: HTML Page or Web Page

//Object: Every HTML element in the document is an object, such as <head> <body> <ul> <p> ...

//Model: How object are related to each other -- Tree

//Node: Everything that we can change in the document -- element, text, attributes ... 

//Three main things we can do with DOM:
//      1 - Change
//      2 - Add
//      3 - Delete

// =============== DOM to access nodes ==============

var containers = document.getElementsByClassName("container");
console.log(containers);
console.log(containers[0]);

var myh1 = containers[0].getElementsByTagName("h1")[0];
console.log(myh1);
console.log(myh1.textContent);
console.log(myh1.innerHTML);

var myNewsLetter = document.getElementById("newsletter");
console.log(myNewsLetter);

// =============== CHANGING elements - DOM to access nodes ==============

    // ****** Changing Page Content - DOM to access nodes
    // 1 - Grab the element
    // 2 - Use methods or properties to change it

var body = document.getElementsByTagName("body")[0];
console.log(body);
//body.innerHTML = "<p>Replaced through JavaScript</p>";
myh1.textContent = "My Web Development";

    // ****** Changing Attributes - DOM to access nodes
    // setAttribute
    // getAttribute

var nav_bar = document.getElementsByTagName("nav")[0];
console.log(nav_bar);
var myLinks = nav_bar.getElementsByTagName("a");
console.log(myLinks[0].getAttribute("href"));

myLinks[0].setAttribute("class","test");
myLinks[1].setAttribute("target", "_blank");
myLinks[2].className = "lasalle";

    // ****** Styling -- Similarly to CSS

var myItems = document.getElementsByTagName("li");
console.log(myItems);

myItems[0].setAttribute("style","background-color: red; padding: 30px;");

myItems[1].style = "background-color: red; padding: 30px;";

myItems[2].style.backgroundColor = "red"; //if it has more than one word the other words starts with Uppercase (background-color)
myItems[2].style.padding = "30px";

for(let i=0;i<myItems.length;i++)
    myItems[i].style = "";

// =============== ADDING elements - DOM to access nodes ==============
//  1 - Create an element
//  2 - Inject the element into the DOM

var newLi = document.createElement("li");
var newA = document.createElement("a");
console.log(newLi);
console.log(newA);

var myUl = document.getElementsByTagName("ul")[0];
console.log(myUl);

newA.textContent = "Blog";
newA.href = "#";
newLi.appendChild(newA);
myUl.appendChild(newLi);

myUl.insertBefore(newLi, myUl.getElementsByTagName("li")[1]);

// =============== REMOVE elements - DOM to access nodes ==============

var childTag = myUl.getElementsByTagName("li")[1];
myUl.removeChild(childTag);