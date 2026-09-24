let b = 20;
let c = 50;
let a = 30;

if (a > b) {

    if (a > c) {
        console.log("the a is greater of all")
    }
    else {
        console.log("The c is greater in all")
    }
}

else {
    if (b > c) {
        console.log("b is greatest in all")
    }
    else {
        console.log("c is greatest of all")
    }
}

let btn_id = document.getElementById("submit_btn");

btn_id.addEventListener("click", () => {

    console.log("The button is clicked");
    let txt_box = document.getElementById("input_user");

    let aa = txt_box.value;

    console.log(aa)
    let op = document.getElementById("output");

    if (aa == "0") {
        op.innerText = "You have entered 0"
    }


    else if (aa == "1") {
        op.innerText = "You have entered 1"
    }


    else if (aa == "2") {
        op.innerText = "You have entered 2"
    }


    else if (aa == "3") {
        op.innerText = "You have entered 3"
    }

    else if (aa == "4") {
        op.innerText = "You have entered 4"
    }

    else if (aa == "5") {
        op.innerText = "You have entered 5"
    }

    else if (aa == "6") {
        op.innerText = "You have entered 6"
    }

    else if (aa == "7") {
        op.innerText = "You have entered 7"
    }

    else if (aa == "8") {
        op.innerText = "You have entered 8"
    }

    else if (aa == "9") {
        op.innerText = "You have entered 09"
    }

    else {
        op.innerText = "You have entered wrong number"

    }
})