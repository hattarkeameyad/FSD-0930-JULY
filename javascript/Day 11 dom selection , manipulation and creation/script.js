let btn_change = document.getElementById("Change");
let btn_change_html = document.getElementById("Html");

let btn_change_js = document.getElementById("Javascript");

let paragraphs = document.getElementsByTagName("p");

let p_by_classname_html = document.getElementsByClassName("html");
let p_by_classname_javascript = document.getElementsByClassName("javascript");


console.log(paragraphs)
btn_change.addEventListener('click', () => {
    for (let value of paragraphs) {
        console.log(value)
        value.style.backgroundColor = "#ffaaee"
    }
})

btn_change_html.addEventListener('click', () => {
    for (let value of p_by_classname_javascript) {
        console.log(value)
        value.style.backgroundColor = "#48ba31"
    }
})
btn_change_js.addEventListener('click', () => {
    for (let value of p_by_classname_html) {
        console.log(value)
        value.style.backgroundColor = "#af9734"
    }
})

let btn_qselect = document.getElementById("qselect");
let btn_qselect_all = document.getElementById("qselect_all");

btn_qselect_all = document.querySelectorAll("qselect_allṭ");
btn_qselect.addEventListener('click', () => {
    let qselected = document.querySelector(".minibox");
    let qselected2 = document.querySelector("#b3")

    qselected.style.backgroundColor = "#871401"
    qselected2.style.backgroundColor = "#118811"
})