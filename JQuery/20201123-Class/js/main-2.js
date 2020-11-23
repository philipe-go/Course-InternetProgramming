$(document).ready(() => {
    $('p.para1').css({ 'color': 'red', 'background-color': '#ccc' });

    // ==========> ADD OR REMOVE CLASSES <===========
    // $('p.para2').addClass('myClass');
    // $('#btn1').click(() => { $('p.para2').toggleClass('myClass'); });
    // $('p.para2').removeClass('myClass');

    // ==========> ADD OR REMOVE TEXTS <===========
    // $('#myDiv').text('Hello World'); //adding bold text
    $('#myDiv').html('<h1>Hello World</h1>'); //adding html as a text
    $('ul#list').append('<li> List item 5 (appended) </li>');
    $('ul#list').prepend('<li> List item 0 (prepended) </li>');
    $('ul#list').before('<h2>Before List</h2>');
    $('ul#list').after('<h2>After List</h2>');
    $('ul#list li:nth-child(2)').before('<li>item 0.1 (add before)</l1>');
    $('ul#list li:nth-child(4)').after('<li>item 2.1 (add after)</l1>');
    // $('.para1').appendTo('.para2');
    // $('.para1').prependTo('.para2');

    // =========> REMOVE ELEMENTS <=========
    // $('ul#list').empty(); //this method empty the children of the argument called "ul#list"
    // $('ul#list').detach(); //this method removes completely children and parent

    // =========> SET OR GET ATTRIBUTES <=========
    $('a').attr('target', '_blank'); //adding attribute to open on new tab in an anchor tag
    // $('a').removeAttr('href'); //removes the attribute href form the anchor tag

    // =========> WRAP ELEMETNS <=========
    // $('p').wrap('<h1>'); //this will wrap all the query tag within the parsed tag individually 
    // $('p').wrapAll('<h1>'); //this will wrap all the query tag within the parsed tag in a group 

    // =========> ADD FROM INPUT <=========

    $('#newItem').keyup((e) => {
        console.log(e.which); //show de numeric value of each key

        if (e.which === 13) {
            $('ul').append('<li>' + e.target.value + ' (appended input)</li>');
            //e.target.value = "";
            $('#newItem').val('');
        }
    })

    var myUsers = ['Phil', 'Lulu', 'Jimmy', 'Snow'];
    $('#btn1').click(() => {
        $.each(myUsers, (i, val) => {
            $('ul#users').append('<li>' + val + '</li>');
        })
    })

    
})