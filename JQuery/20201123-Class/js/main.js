// =============> SELECTORS <==============

// Methods exhisting in the JQuery library
// $('#heading2').hide();

$('#heading1').css('color','red');
$('ul#list li:first-child').css('color','red');
$('ul#list li:last-child').css('color','blue');
$('ul#list li:nth-child(odd)').css('background-color', 'gray');
$('ul#list li:nth-child(even)').css('background-color', 'lightgray');

// $('input[type="text"]').hide();
$(':text').hide(); //grab anything that has the type = "text"
$('input[type="button"]').css('border', 'none');
$('a[href="https://www.google.ca/"]').css('color','green');

// $('*').hide(); // HIDE ALL ELEMENTS WITH THE WILD CARD '*'