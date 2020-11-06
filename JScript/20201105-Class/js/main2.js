var myForm2 = document.forms.myform;
console.log(myForm2);
console.log(myForm2.name);
console.log(myForm2.biking);
console.log(myForm2.color);
console.log(myForm2.skiing.value);

var myForm = document.getElementById("myForm");
var name = document.getElementById("_name");
var hobbies = document.getElementsByTagName("input[type='checkbox']");
var color = document.getElementsByTagName("select")[0];

console.log(myForm);
console.log(name);
console.log(hobbies);
console.log(color);

myForm.onsubmit = function(e){
    let name = myForm.id._name;
    let color = myForm.getElementsByTagName("select")[0];

    console.log(name);
    console.log(hobbies);
    console.log(color);
}
