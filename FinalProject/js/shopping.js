$(document).ready(() => {
    var checks = document.querySelectorAll('input[type="checkbox"]');
    var totalprice1 = 0.0;
    var totalprice2 = 0.0;
    var maxItems1 = parseFloat(localStorage.getItem('maxItems1'));
    var maxItems2 = parseFloat(localStorage.getItem('maxItems2'));
    var invoice = 0.0;
    var quantity = 0.0;

    //LOAD PICTURES
    var pictures = document.querySelectorAll('.gallery-1 #picture');
    var index = 0;
    pictures.forEach(t => {
        $(t).css("height","400px");
        $(t).css("width","400px");
        $(t).css("background-image","url(../media/BW/pic"+index+".jpeg)");
        $(t).css("background-size","contain");
        $(t).css("background-repeat","no-repeat");
        $(t).css("background-position","center");

        index ++;
    });

    index = 0;
    pictures = document.querySelectorAll('.gallery-2 #picture');
    pictures.forEach(t => {
        $(t).css("height","400px");
        $(t).css("width","400px");
        $(t).css("background-image","url(../media/Color/pic"+index+".jpeg)");
        $(t).css("background-size","contain");
        $(t).css("background-repeat","no-repeat");
        $(t).css("background-position","center");

        index ++;
    });


    $('select').on('focus', (e) => {
        var parent = findParent(e.target);
        e.target.innerHTML = "";
        let limit = parent.className == 'gallery-1' ? maxItems1 : maxItems2;
        for (let i = 0; i <= limit; i++) {
            var opt = document.createElement('option');
            opt.setAttribute('value', i);
            opt.textContent = i;
            e.target.appendChild(opt);
        }
    });

    $(checks).click((e) => {
        var item = e.target.parentElement.parentElement;
        var price = e.target.value;
        var amount = item.querySelector('select').value;
        let gallery = item.parentElement.parentElement.parentElement.parentElement.className;
        if (e.target.checked) {
            addPrice(gallery, amount, price);
            item.querySelector('select').disabled = true;
        }
        else {
            removePrice(gallery, amount, price);
            item.querySelector('select').disabled = false;
        }
    });

    $('#add-cart1').click((e) => {
        $('#gallery1-total').val("");
        updateInvoice();
    });
    $('#add-cart2').click((e) => {
        $('#gallery2-total').val("");
        updateInvoice();
    });

    function addPrice(gallery, amount, price) {
        if (gallery == "gallery-1") {
            totalprice1 += amount * price;
            $('#gallery1-total').val(totalprice1.toFixed(2));
            maxItems1 -= amount;
        }
        else {
            totalprice2 += amount * price;
            $('#gallery2-total').val(totalprice2.toFixed(2));
            maxItems2 -= amount;
        }
    };

    function removePrice(gallery, amount, price) {
        if (gallery == "gallery-1") {
            totalprice1 -= (amount * price);
            $('#gallery1-total').val(totalprice1.toFixed(2));
            maxItems1 += amount;
        }
        else {
            totalprice2 -= (amount * price);
            $('#gallery2-total').val(totalprice2.toFixed(2));
            maxItems2 += amount;
        }
    };

    function findParent(element) {
        let temp = element;
        while (temp.parentElement) {
            temp = temp.parentElement;
            if (temp.className == "gallery-1" || temp.className == "gallery-2") return temp;
        };
    };

    function updateInvoice() {
        invoice = totalprice1 + totalprice2;
        quantity = 8 - (maxItems1 + maxItems2);
        localStorage.setItem('invoice', invoice);
        localStorage.setItem('quantity', quantity);

        localStorage.setItem('maxItems1', maxItems1);
        localStorage.setItem('maxItems2', maxItems2);
    };
})


