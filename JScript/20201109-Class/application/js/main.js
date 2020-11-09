document.addEventListener("DOMContentLoaded",function(){
    var list = document.querySelector("#book-list ul");
    var forms = document.forms;

    //delete books
    list.addEventListener("click",function(e){
        if(e.target.className == "delete") 
        {
             let li = e.target.parentElement;
             li.parentNode.removeChild(li); //delete from the parent <<<<<<<<<<<<<<<
        }
    })

    //add books

    //hide book

    //search book
});