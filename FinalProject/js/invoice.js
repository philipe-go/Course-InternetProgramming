$(document).ready(()=>{
    var invoice = parseFloat(sessionStorage.getItem('invoice'));
    var quantity = parseFloat(sessionStorage.getItem('quantity'));

    if (invoice === NaN || quantity === NaN)
    {
        invoice = 0;
        quantity = 0;
    }
    $('#price').text((invoice / quantity).toFixed(2));
    $('#quantity').text(quantity);
    
    $('#subtotal').text('Subtotal: '+invoice.toFixed(2));
    let tps = invoice*0.05;
    $('#TPS').text('TPS: '+tps.toFixed(2));
    let tvq = invoice*0.095;
    $('#TVQ').text('TVQ: '+tvq.toFixed(2));
    let total = invoice + tps + tvq;
    $('#total').text('TOTAL: '+total.toFixed(2));
})