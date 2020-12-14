$(document).ready(() => {
    // var display_feedback = document.getElementsByClassName('.display input');
    var convertionRate1;
    var convertionRate2;
    var outputString;

    $('#convertion').change((e) => {
        var convertion = e.target.value;
        switch (convertion) {
            case "none":
                {
                    document.getElementById('cadTxt').value = "";
                    document.getElementById('otherTxt').value = "";
                    document.getElementById('top-radioTxt').value = ""
                    document.getElementById('botton-radioTxt').value = ""
                    $('#top-radio').attr('disabled', true);
                    $('#botton-radio').attr('disabled', true);
                    $('#convertBtn').attr('disabled', true);
                    $('#money-input').attr('disabled', true);
                } break;
            case "USA":
                {
                    document.getElementById('cadTxt').value = "One CAD Dollar = 0.6 British Pound";
                    document.getElementById('otherTxt').value = "One Britsh Pound = 1.65 CAD Dollar";
                    document.getElementById('top-radioTxt').value = "CAD Dollar to Pound"
                    document.getElementById('botton-radioTxt').value = "Pound to CAD Dollar"
                    $('#top-radio').attr('disabled', false);
                    $('#botton-radio').attr('disabled', false);
                    $('#money-input').attr('disabled', false);
                    convertionRate1 = 0.6;
                    convertionRate2 = 1.65;
                    outputString = "Pound";

                } break;
            case "UK":
                {
                    document.getElementById('cadTxt').value = "One CAD Dollar = 0.79 Dollar USD";
                    document.getElementById('otherTxt').value = "One Dollar USD = 1.27 CAD Dollar";
                    document.getElementById('top-radioTxt').value = "CAD Dollar to Dollar USD"
                    document.getElementById('botton-radioTxt').value = "Dollar USD to CAD Dollar"
                    $('#top-radio').attr('disabled', false);
                    $('#botton-radio').attr('disabled', false);
                    $('#money-input').attr('disabled', false);
                    convertionRate1 = 0.79;
                    convertionRate2 = 1.27;
                    outputString = "Dollar USD";

                } break;
            case "France":
                {
                    document.getElementById('cadTxt').value = "One CAD Dollar = 0.67 Euro";
                    document.getElementById('otherTxt').value = "One Euro = 1.5 CAD Dollar";
                    document.getElementById('top-radioTxt').value = "CAD Dollar to Euro"
                    document.getElementById('botton-radioTxt').value = "Euro to CAD Dollar"
                    $('#top-radio').attr('disabled', false);
                    $('#botton-radio').attr('disabled', false);
                    $('#money-input').attr('disabled', false);
                    convertionRate1 = 0.67;
                    convertionRate2 = 1.5;
                    outputString = "Euro";
                } break;
        }
    });

    $('#top-radio').click(()=>{
        $('#convertBtn').attr('disabled', false);
        document.getElementById('input-currency'). value = "Dollar CAD";
        document.getElementById('output-currency').value = outputString;
    });

    $('#botton-radio').click(()=>{
        $('#convertBtn').attr('disabled', false);
        document.getElementById('input-currency').value = outputString;
        document.getElementById('output-currency').value = "Dollar CAD";
    });

    $('#convertBtn').click((e)=>{
        e.preventDefault();
        let input = document.getElementById('money-input').value;
        var rate = $('#top-radio').prop('checked') ? parseFloat(input * convertionRate1) : 
                                    parseFloat(input * convertionRate2) ;
        document.getElementById('convertion-result').value = parseFloat(rate).toFixed(2);
    });

    $('#resetBtn').click(()=>{
        window.location.reload();
    });
})