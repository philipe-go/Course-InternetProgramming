// =================== REGEX Rules =================== 
// Meta Characters:
//      \d --> digits --> (0-9)
//      \D --> opposite of \d
//      \w --> any valid word --> (aA-zZ) (0-9) (_)
//      \W --> opposite of \w
//      \s --> spaces --> (tab) (nl) ( )
//      \S --> opposite of \s

// Characters set:
//      [0-9] --> digits 
//      [aA-zZ] --> any word
//      ^ --> negation   ie: [^0-9] any character set without numbers

// Quantifier or Range:
//      + --> one or more character
//      * --> zero or more
//      {x} --> defined by the x
//      . --> any character
//      g --> global
//      ? --> optional character ie: a-z? means all but z
//      | --> or 
//      () --> grouping  ie: (p|t)ia = pia tia
//      

document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll("input");
    //console.log(inputs);

    //var userName = /[a-z]/gi;
    //var userName = new RegExp(/[a-z]{8-20}/,"gi");

    //Object with all the patterns related to each field
    var pattern = {
        //these properties need to be the same name of the attribute in the html as it will be called inside the validator
        telephone: /^\(?(\d{3})\)?(\d{3})(\-)?(\d{4})$/,
        username: /^[\w\s]{5,12}$/i,
        pass: /^[\w-@]{8,20}$/,   
        slug: /^[a-z\d-]{3,20}$/,
        email: /^([\w\.-]+)@([\w-]+)\.([a-z]{2,8})(\.[\w]{2,8})?$/ //(username)@(domain).(extension).(something)
    }

    //Method used to validate each field based on its pattern property
    function validator(field, regex){
        if (regex.test(field.value)) {
            field.className = "valid";
        }
        else { field.className = "invalid"; }
    }

    //iterate through all the fields and retrieve each input to be validated
    inputs.forEach((ipt) => {
        ipt.addEventListener("keyup", (e) => {
            console.log(e.target.value);
            validator(e.target, pattern[e.target.attributes.name.value]);
        })
    })














});
