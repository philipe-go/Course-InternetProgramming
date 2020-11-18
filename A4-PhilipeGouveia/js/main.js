document.addEventListener("DOMContentLoaded", function () {
    var table = document.querySelector("tbody");
    var addbtn = document.querySelector(".addbtn");
    var buttons = table.querySelectorAll(".p-buttons input");

    updateButtons(); //function created to add eventListener on the new buttons

    //add new person button
    addbtn.addEventListener("click", e => {
        e.preventDefault();
        let personData = document.getElementsByClassName("person-add")[0];
        let newData = personData.querySelectorAll('input[type="text"]');

        var tRow = table.insertRow();
        tRow.className = "person-data";
        var cell1 = tRow.insertCell(0);
        cell1.className = "p-name";
        var cell2 = tRow.insertCell(1);
        cell2.className = "p-country";
        var cell3 = tRow.insertCell(2);
        cell3.className = "p-age";
        var cell4 = tRow.insertCell(3);
        cell4.className = "p-buttons";

        let tName = document.createElement("td");
        let tCountry = document.createElement("td");
        let tAge = document.createElement("td");
        let tInputData = document.querySelectorAll(".p-buttons")[0];

        tName.textContent = newData[0].value;
        tCountry.textContent = newData[1].value;
        tAge.textContent = newData[2].value;

        cell1.innerHTML = tName.innerHTML;
        cell2.innerHTML = tCountry.innerHTML;
        cell3.innerHTML = tAge.innerHTML;
        cell4.innerHTML = tInputData.innerHTML;

        updateButtons();

        newData.forEach(t => {
            t.value = "";
        })
    });

    //edit person button
    function editItem(e) {
        let row = e.target.parentElement.parentElement;
        let name = row.getElementsByClassName("p-name")[0].innerHTML;
        let country = row.getElementsByClassName("p-country")[0].innerHTML;
        let age = row.getElementsByClassName("p-age")[0].innerHTML;
        
        let nameInput = document.createElement('input');
        let countryInput = document.createElement('input');
        let ageInput = document.createElement('input');
        nameInput.type = "text";
        nameInput.className = "newInput";
        countryInput.type = "text";
        countryInput.className = "newInput";
        ageInput.type = "text";
        ageInput.className = "newInput";
        
        nameInput.placeholder = name;
        countryInput.placeholder = country;
        ageInput.placeholder = age;

        row.getElementsByClassName("p-name")[0].innerHTML = nameInput.outerHTML;
        row.getElementsByClassName("p-country")[0].innerHTML = countryInput.outerHTML;
        row.getElementsByClassName("p-age")[0].innerHTML = ageInput.outerHTML;

        row.getElementsByClassName("editbtn")[0].style.display = "none";
    };

    //save person row button
    function saveItem(e) {
        let row = e.target.parentElement.parentElement;
        let newName = row.getElementsByClassName("newInput")[0].value != "" ? 
                    row.getElementsByClassName("newInput")[0].value : 
                    row.getElementsByClassName("newInput")[0].placeholder;
        let newCountry = row.getElementsByClassName("newInput")[1].value != "" ?
                    row.getElementsByClassName("newInput")[1].value : 
                    row.getElementsByClassName("newInput")[1].placeholder;
        let newAge = row.getElementsByClassName("newInput")[2].value != "" ?
                    row.getElementsByClassName("newInput")[2].value : 
                    row.getElementsByClassName("newInput")[2].placeholder;

        row.querySelector(".p-name").textContent = newName;
        row.querySelector(".p-country").textContent = newCountry;
        row.querySelector(".p-age").textContent = newAge;
        
        row.getElementsByClassName("editbtn")[0].style.display = "initial";
    };

    //delete person row button
    function deleteItem(e) {
        e.preventDefault();
        let row = e.target.parentElement;
        table.removeChild(row.parentElement);
    };

    //function to add eventListener to all buttons in the tbody
    function updateButtons() {
        var buttons = table.querySelectorAll(".p-buttons input");
        buttons.forEach(bt => {
            bt.addEventListener("click", e => {
                switch (bt.className) {
                    case "editbtn":
                        {
                            editItem(e);
                        } break;
                    case "savebtn":
                        {
                            saveItem(e);
                        } break;
                    case "deletebtn":
                        {
                            deleteItem(e);
                        } break;
                }
            });
        });
    }
})