$('.content').hide();
$('#topBtn').hide();

$(document).ready(() => {

    $('.container').animate({
        width: '100%',
        height: '500px'
    });

    $('.content').fadeIn(1500);
    $('#topBtn').fadeIn(1500);

    var topBtn = document.querySelectorAll("#topBtn");
    $(topBtn).click(()=>{
        $('.container').animate({scrollTop:0}, 'slow');
    });

    //TOGGLE
    let descriptions = document.querySelectorAll('#description-row');
    descriptions.forEach(item => {
        if (item) { item.style.display = "none"; }
    });

    let picture = document.querySelectorAll('#picture');
    picture.forEach(item => {
        item.addEventListener('click', (e) => {
            let row = e.target.parentElement.parentElement.parentElement.querySelector('#description-row');
            $(row).toggle();
        });
    });

    //SEARCH
    var tempItem;
    $('.search').click((e) => {
        e.target.value = "";
    });

    $('.search').keyup((e) => {
        tempItem = e.target.value.toLowerCase();
    });

    $('.searchBtn').click(() => {
        if (tempItem != null) {
            var item = document.querySelectorAll('#description-row h2');
            
            item.forEach(it => {
                var title = it.textContent.toLowerCase();
                if (title.trim() === tempItem.trim()) {
                    var row = it.parentElement.parentElement;
                    $(row).show();
                    $('.search').val("");
                    let loc = $(row).offset().top - 300;
                    console.log(loc);

                    $('.container').animate({scrollTop:loc}, 'slow');
                }
            });
        }
    });

    var btnState = 1;
    $('.showallBtn').click((e) => {
        let descriptions = document.querySelectorAll('#description-row');
        if (btnState == 1) {
            $(descriptions).show();
            e.target.textContent = "Hide All";
            btnState -= 1;
        }
        else {
            $(descriptions).hide();
            e.target.textContent = "Show All";
            btnState = 1;
        }
    });
})