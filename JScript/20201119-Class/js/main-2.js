document.addEventListener("DOMcontentLoaded", ()=>{
 var myForm = document.forms(0);

 myForm.addEventListener("submit", e => {
    //  e.preventDefault();
     var uName = myForm.querySelector("#uName").value;
     var uPhone = myForm.querySelector("#uPhone").value;
     var uEmail = myForm.querySelector("#uEmail").value;

     var uInfo = {
         'uName': uName,
         'uEmail': uEmail,
         'uPhone': uPhone
     }

     localStorage.setItem('contactInfo', JSON.stringify(uInfo));
 })
})