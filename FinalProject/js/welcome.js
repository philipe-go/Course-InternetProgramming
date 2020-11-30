$(document).ready(() => {
    sessionStorage.setItem('invoice', 0.0);
    sessionStorage.setItem('quantity', 0.0);
    
    var wrong = $('#wrong-user').text();
    $('#wrong-user').text("");

    $('.login').hide();
    $('.welcome').fadeIn(1500);

    $('#homeBtn').click(()=>{
        $('.login').hide();
        $('.welcome').fadeIn(1500);
    });

    $('#loginBtn').click(()=>{
        $('.welcome').hide();
        $('.login').fadeIn(1500);
    });

    //==========function to handle the user login
    var user = ('admin');
    var password = ('12345');
    $('#userlogin').click((e)=>{
        e.preventDefault();
        let un = $('#username').val();
        let ps = $('#password').val();

        console.log(user);
        console.log(password);

        if (un == user && ps == password)
        {
            window.open('./html/main.html', '_self');
        }
        else 
        {
            $('#wrong-user').text(wrong);
            $('#username').val("");
            $('#password').val("");
        }
    });
})