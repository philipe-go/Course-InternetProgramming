$(document).ready(()=>{

    AddInvoice();
    var fields = document.querySelectorAll('input');
    
    $('#clear-form').click((e)=>{
        e.preventDefault();
        fields.forEach(t => {
            if (t.type == 'text') t.value = "";
        });

        sessionStorage.setItem('invoice', 0.0);
        sessionStorage.setItem('quantity', 0.0);

        AddInvoice();

        alert("Order cancelled");
    });

    $('#make-payment').click(()=>{
        alert("Thank you for your shopping");
    });

    var pattern = {
        cardNumber: /^([\d]{16,17})$/,
        cvv: /^([0-9]{3})$/,
        expDate: /^([0-9]{2})(\/)?([0-9]{2})$/,   
        postalCode: /^([a-z][0-9]{3})([a-z][0-9]{3})$/
    }

    fields.forEach(t => {
        if (t.type == 'text') {
            t.addEventListener("keyup", (e) => {
                RegexCheck(e.target, pattern[e.target.attributes.name.value]);
            })        
        }
    });
})

function AddInvoice(){
    var invoice = parseFloat(sessionStorage.getItem('invoice'));
    var quantity = parseFloat(sessionStorage.getItem('quantity'));

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

function RegexCheck(field, regex){
    if (regex.test(field.value)) {
        field.className = "invalid";
        alert(field.attributes.name.value+" invalid");
        field.value = ""; 
    }
    else { 
        field.className = "valid";
    }
};