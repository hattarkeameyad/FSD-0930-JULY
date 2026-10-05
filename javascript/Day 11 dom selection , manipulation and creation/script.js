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

btn_qselect.addEventListener('click', () => {
    let qselected = document.querySelector(".minibox");
    let qselected2 = document.querySelector("#b3")

    qselected.style.backgroundColor = "#871401"
    qselected2.style.backgroundColor = "#118811"
})

btn_qselect_all.addEventListener("click", () => {
    let qselectall = document.querySelectorAll(".minibox")

    for (values of qselectall) {
        values.style.backgroundColor = "#c38fd1"
    }

    let headingcontent = document.getElementById("heading").textContent
    console.log(headingcontent);
    let heading = document.getElementById("heading");
    heading.textContent = "Now we have simplified the process"

    //how to check the count 
    let obj_li = document.getElementsByTagName("li");
    console.log(obj_li.length);

    //how to check if variable exhists?

    let selected_element = document.getElementById('matching');

    if (selected_element) {
        console.log("element exhists")
    }
    else {
        console.log("element is absent")
    }

    //accessing the attributes

    let checking_id = document.getElementById("list")
    console.log(checking_id.id)
    checking_id.id = "b2"
    console.log(checking_id.id)

})

//dommanupulation

let var_test = document.getElementById("test_paragraph");


let btn_modify = document.getElementById("modify")

btn_modify.addEventListener("click", () => {
    var_test.innerText = "Now the paragraph is changed";
    var_test.style.width = "400px"

    var_test.textContent = "This is text content"

    btn_modify.innerText="Butoon also changed"
    // btn_modify.textContent="Button got bigger"


})