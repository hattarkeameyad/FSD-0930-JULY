let btn_get = document.getElementById("perform");
let txt_input = document.getElementById('u_input');
let txt_output = document.getElementById("u_output");
btn_get.addEventListener('click', () => {

    let value = txt_input.value;
    txt_output.value = value;
});