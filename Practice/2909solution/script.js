let txt_vara = document.getElementById("var_a");
let txt_varb = document.getElementById("var_b");
let txt_var_output = document.getElementById("var_output");

let btn_even = document.getElementById("even_odd");
let btn_greater = document.getElementById("Greater");
let btn_positive = document.getElementById("positive_neg");
let btn_prime = document.getElementById("is_prime");
let btn_fact = document.getElementById("factorial");


btn_even.addEventListener('click', () => {
    txt_var_output.value = even_odd();
});

btn_greater.addEventListener('click', () => {
    txt_var_output.value = greater_number(txt_vara.value, txt_varb.value);

});

btn_positive.addEventListener('click', () => {
    txt_var_output.value = positive_negative(txt_vara.value);

});


btn_prime.addEventListener('click', () => {
    txt_var_output.value = isprime(txt_vara.value);

});


btn_fact.addEventListener('click', () => {
    txt_var_output.value = fact_of_number(txt_vara.value);

});

function fact_of_number(q) {

    let factorial = 1;
    for (let i = 1; i <= q; i++) {
        factorial = factorial * i;
    }
    return factorial;

}


function isprime(q) {
    let prime = 0;
    for (let i = 2; i < q; i++) {
        if (q % i === 0) {
            prime = 1;
        }
    }
    if (prime == 1) {
        return "The number is not prime";
    }
    else {
        return "The number is prime";
    }

}


function positive_negative(q) {
    if (q > 0) {
        return "The number is positive";
    }
    else {
        return "The number is negative";
    }

}

function greater_number(q, s) {
    if (q > s) {
        return q;
    }
    else {
        return s;
    }

}
function even_odd() {
    if (txt_vara.value % 2 === 0) {
        return "Even"
    }
    else {
        return "incorrect input or the number is odd";
    }

}