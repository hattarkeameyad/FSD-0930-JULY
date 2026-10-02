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