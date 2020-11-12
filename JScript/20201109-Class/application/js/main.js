document.addEventListener("DOMContentLoaded",function(){
    var list = document.querySelector("#book-list ul");
    var forms = document.forms;

    //delete books
    list.addEventListener("click",function(e){
        if(e.target.className == "delete") 
        {
             let li = e.target.parentElement;
             //li.parentNode.removeChild(li); //delete from the parent <<<<<<<<<<<<<<<
             list.removeChild(li); //remove child of the parent
        }
    })

    //var addBook = forms["add-book"];
    var addBook = document.querySelector("#add-book");


    //add books
    addBook.addEventListener("submit", (e) => {
        e.preventDefault(); //used to prevent the form to refresh
        var newBook = addBook.querySelector('input[type="text"]').value; //use addBook as you already add it from the document

        let aLi = document.createElement('li');
        let aBook = document.createElement('span');
        let aDelete = document.createElement('span');

        aBook.textContent = newBook;
        aDelete.textContent = 'Delete';
        aBook.className = "name";
        aDelete.className = "delete";

        aLi.appendChild(aBook);
        aLi.appendChild(aDelete);
        list.appendChild(aLi);

        newBook.querySelector('input[type="book"]').value = "";
    })

    //hide book
    var hideBox = document.querySelector("#hide");
    hideBox.addEventListener("change", (e) =>{
        if (hideBox.checked)
        {
            list.style.display = "none";
        }
        else
        {
            list.style.display = "initial";
        }
    })

    //search book
    var searchBook = forms("search-books").querySelector('input');
    searchBook.addEventListener("keyup", (e)=>{
        let term = searchBook.value.toLowerCase();
        let books = list.querySelectorAll('li');
        books.forEach(function(book){
            var title = book.firstElementChild.textContent.toLowerCase();
            if (title.indexOf(term) != -1)
            { 
                book.style.display = "block";
            }
            else 
            {
                book.style.display = "none";
            }
        });
    })
});