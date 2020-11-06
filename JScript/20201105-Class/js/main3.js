var content = document.getElementById("container");
var btn = document.getElementById("show-more");

btn.onclick = function(){
    if(content.className == "open") { 
        content.className = "";
        btn.textContent = "show more";
    }
    else {
        content.className = "open";
        btn.textContent = "show less";
    }
}