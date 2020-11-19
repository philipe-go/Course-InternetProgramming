// ============> SESSION STORAGE <============
/*
Stores data only for one session
Data will get clear when you close the tab (window) or manually by JS
Storage size is up to 5mb
it works only with HTML5
It works only on your browser (no server)
*/

// ============> LOCAL STORAGE <============
/*
Stores data with no expiration date
data will get clear when you close your browser or manually by JS
Storage size is up to 10mb
It works only with HTML5
It works only on your browser (no server)
*/

// ============> COOKIES STORAGE <============
/*
Stores data for a long time, depends on expiration date
Data will get clear by expiration date or manually by JS
Storage size is 4kb 
it works with HTML5 / HTML4
it works on your browser and Server
*/

// ============> FUNCTIONS FOR STORAGE <============
// getItem(key)
// setItem(key, value)
// clear()
// removeItem(key)
// key(index)



document.addEventListener("DOMContentloader", f =>{

    localStorage.getItem("name","Phil");
    console.log(localStorage.getItem("name"));

    sessionStorage.setItem("id","22");
    //sessionStorage.clear();
    sessionStorage.removeItem("id");

    document.cookie = "fullName=Phil Go;expire="+ new Date(2025, 0,1).toUTCString();
})