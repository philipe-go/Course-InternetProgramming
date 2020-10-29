var myItems = document.getElementsByTagName("li");
console.log(myItems);

myItems[0].setAttribute("style","background-color: red; padding: 30px;");

myItems[1].style = "background-color: red; padding: 30px;";

myItems[2].style.backgroundColor = "red"; //if it has more than one word the other words starts with Uppercase (background-color)
myItems[2].style.padding = "30px";
