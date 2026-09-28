let btn_get = document.getElementById("perform");
let txt_input = document.getElementById('u_input');
let txt_output = document.getElementById("u_output");
btn_get.addEventListener('click', () => {

    let value = txt_input.value;
    txt_output.value = value;
});


//factorial program for a certain numbers

let arr1 = [5, 3, 2, 20, 25];


for (let val of arr1) {
    console.log("First for loop executed");
    factorial(val);
}
// factorial(arr1[0]);
// factorial(arr1[1]);
// factorial(arr1[2]);
// factorial(arr1[3]);
// factorial(arr1[4]);



function factorial(uinput) {
    let fact = 1;

    for (let i = 1; i <= uinput; i++) {
        fact = fact * i;
    }

    console.log("The factorial of ", uinput, " Is : ", fact)

}
