var myBtn = document.getElementById("button");

//First way of calling the "onclick" event
// myBtn.onclick = function(){
//     console.log("Clicked with onclick event");
// }

myBtn.addEventListener("click", function (e) {
    console.log("Clicked with Event Listener");
    document.getElementById("header-title").textContent = "Changed";
    document.getElementById("main").style.backgroundColor = "#f4f4f4";

    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.id.className);

    var output = document.getElementById("output");
    output.innerHTML = "<h3>"+e.target.id+"</h3>";
    console.log(e.type);

    //client show the coordinate relative to the page
    console.log(e.clientX);
    console.log(e.clientY);

    //offset show the coordinate relative to the object
    console.log(e.offsetX);
    console.log(e.offsetY);

    document.getElementById("main").style.backgroundColor = "rgb("+ e.clientX +","+e.clientY+",0)";
});

var page = document.getElementsByTagName("body")[0];
page.addEventListener("click", function(e){
    console.log(e.clientX);
    console.log(e.clientY);
});