$('.content').hide();
$('#topBtn').hide();

$(document).ready(()=>{
    alert("Welcome to my webpage");

    $('.container').animate({
        width: '100%',
        height: '500px'
    });

    $('.content').fadeIn(1500);
    $('#topBtn').fadeIn(1500);

    $(document).find("#topBtn").click(()=>{
        $('.container').animate({scrollTop:0}, 'slow');
    });
})