document.addEventListener("DOMcontentLoaded", ()=>{

    var myNewObj = JSON.parse(localStorage.getItem('contactInfo'));

    document.getElementById('uName').textContent = myNewObj.uName;
    document.getElementById('uPhone').textContent = myNewObj.uPhone;
    document.getElementById('uEmail').textContent = myNewObj.uEmail;
}