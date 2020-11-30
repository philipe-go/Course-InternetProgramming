$(document).ready(()=>{

    AddInvoice();

    var fields = document.querySelectorAll('input');
    
    $('#clear-form').click((e)=>{
        e.preventDefault();
        fields.forEach(t => {
            if (t.type == 'text') t.value = "";
        });

        localStorage.setItem('invoice', 0.0);
        localStorage.setItem('quantity', 0.0);

        AddInvoice();

        alert("Order cancelled");
    });

    $('#make-payment').click(()=>{
        var flag = 1;
        fields.forEach(t => {
            if ((t.type == 'text') && (t.required == true) && (t.value == "")) 
            { 
                flag = 0;
            } 
        });
        if (flag == 1) alert("Thank you for your shopping");
        else alert("Mandatory fields not filled");
    });

    var pattern = {
        cardNumber: /^[0-9]{15,16}$/,
        cvv: /^[0-9]{3}$/,
        expDate: /^([0-9]{2})(\/)?([0-9]{2})$/,   
        postalCode: /^([\w]{3})(\-)?(\s)?([\w]{3})$/
    }

    var message = {
        cardNumber: 'Please enter a valid card number (15 or 16 numbers without spaces)',
        cvv: 'Please enter a valid cvv (3 numeric digits)',
        expDate: 'Please enter a valid expire date (MM/YY)',   
        postalCode: 'Please enter a valid postal code (B0B-4A4)'
    }

    fields.forEach(t => {
        if (t.type == 'text') {
            t.addEventListener("focusout", (e) => {
                RegexCheck(e.target, pattern[e.target.attributes.name.value], message[e.target.attributes.name.value]);
            })        
        }
    });
})

function AddInvoice(){
    var invoice = parseFloat(localStorage.getItem('invoice'));
    var quantity = parseFloat(localStorage.getItem('quantity'));

    if (quantity != 0) $('#price').text((invoice / quantity).toFixed(2));
    else $('#price').text((0).toFixed(2));

    $('#quantity').text(quantity);
    
    $('#subtotal').text('Subtotal: '+invoice.toFixed(2));
    let tps = invoice*0.05;
    $('#TPS').text('TPS: '+tps.toFixed(2));
    let tvq = invoice*0.095;
    $('#TVQ').text('TVQ: '+tvq.toFixed(2));
    let total = invoice + tps + tvq;
    $('#total').text('TOTAL: '+total.toFixed(2));

    $('#total-purchased').val("$ "+total.toFixed(2));
};

function RegexCheck(field, regex, message){
    if (!regex.test(field.value) && field.value!="") {
        alert(message);
        field.value = "";
    }
};