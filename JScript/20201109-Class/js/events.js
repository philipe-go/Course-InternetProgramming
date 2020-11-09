//=================Button Events==================

var button = document.getElementById("button");

//button.addEventListener("click",runEvent);
button.addEventListener("dblclick",runEvent);
button.addEventListener("mousedown",runEventDown);
button.addEventListener("mouseup",runEventUp);

function runEvent(e)
{
    console.log("Event type "+e.type);
    console.log("Double clicked for: "+ e.target.id);
}


function runEventDown(e)
{
    console.log("Event type "+e.type);
    console.log("Mouse Down for: "+ e.target.id);
}

function runEventUp(e)
{
    console.log("Event type "+e.type);
    console.log("Mouse Up for: "+ e.target.id);
}

//=================Box Events==================

var box = document.getElementById("box");

//console.log(box);

box.addEventListener("mouseenter",runEventEnter);
// box.addEventListener("mouseover",runEventOver); //works for child not only the box itself
// box.addEventListener("mouseleave",runEventLeave);
// box.addEventListener("mouseout",runEventOut); //works for child not only the box itself

function runEventEnter(e)
{
    console.log(e.target);
    console.log("Mouse Enter Box: "+ e.target.id);
}

function runEventLeave(e)
{
    console.log(e.target);
    console.log("Mouse Leave Box: "+ e.target.id);
}

function runEventOver(e)
{
    console.log(e.target);
    console.log("Mouse Over Box: "+ e.target.id);
}

function runEventOut(e)
{
    console.log(e.target);
    console.log("Mouse Over Box: "+ e.target.id);
}

//=================Input Events==================

var itemInput = document.getElementsByTagName("input")[0];

//console.log(itemInput);

//itemInput.addEventListener("keydown", inputEvent);
//itemInput.addEventListener("keypress", inputEvent);
//itemInput.addEventListener("keyup", inputEvent);
itemInput.addEventListener("focus", inputFocus);
itemInput.addEventListener("blur", inputFocus);

itemInput.addEventListener("cut", inputCP);
itemInput.addEventListener("paste", inputCP);

function inputEvent(e)
{
    console.log("Event Input: "+ e.type);
    console.log(e.target.value);
}
function inputFocus(e)
{
    console.log("Event Focus: "+ e.type);
    if(e.type == "focus") e.target.style.backgroundColor = "red";
    else     e.target.style.backgroundColor = "white";
}
function inputCP(e)
{
    console.log("Event Focus: "+ e.type);
}

//=================Select Events==================

var select = document.getElementsByTagName("select")[0];

//console.log(select);

select.addEventListener("change",RunEventSel);

function RunEventSel(e)
{
    console.log("Event Select: "+ e.type);
    console.log(e.target.value);
}

