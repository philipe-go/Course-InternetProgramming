$(document).ready(()=>{

    var pictures = document.querySelectorAll('table #picture');
    var index = 0;

    pictures.forEach(t => {
        $(t).css("height","400px");
        $(t).css("width","400px");
        $(t).css("background-image","url(../media/BW/pic"+index+".jpeg)");
        $(t).css("background-size","contain");
        $(t).css("background-repeat","no-repeat");
        $(t).css("background-position","center");
        $(t).attr("href", "../media/BW/pic"+index+".jpeg");

        t.addEventListener('dblclick', () => {
            window.open($(t).attr('href'), "target:_black");
        });

        index ++;
    });






})