$('.content').hide();
$('#topBtn').hide();

$(document).ready(()=>{

    $('.container').animate({
        width: '100%',
        height: '500px'
    });

    $('.content').fadeIn(1500);
    $('#topBtn').fadeIn(1500);

    $("#top").click(()=>{
        $('.container').animate({scrollTop:0}, 'slow');
    });

    //TOGGLE
    let descriptions = document.querySelectorAll('#description-row');
    descriptions.forEach(item => {
        if (item) { item.style.display = "none"; }
    });

    let picture = document.querySelectorAll('#picture');
    picture.forEach(item =>{
        item.addEventListener('click',(e)=>{
            let row = e.target.parentElement.parentElement.parentElement.querySelector('#description-row');
            $(row).toggle();
        });
    });

    //SEARCH
    var searchItem = document.querySelector('.search');
    console.log(searchItem);
    searchItem.addEventListener("keyup", (e)=>{
        let temp = searchItem.value.toLowerCase();
        let item = list.querySelectorAll('#description-row');
        console.log(item);
        item.forEach(item=>{
            var title = item.firstElementChild.textContent.toLowerCase();
            if (title.indexOf(temp) != -1)
            { 
                item.style.display = "block";
            }
            else 
            {
                item.style.display = "none";
            }
        });
    })
})