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


let counter = 0;
function myfunction() {
    console.log(++counter);
}

myfunction();
myfunction();
myfunction();
myfunction();
myfunction();
myfunction();

//parameterized function

function myfunction2(a, b) {
    console.log("addition is ", a + b);
}

myfunction2(20, 45);
myfunction2(240, 45);
myfunction2(10, 45);
myfunction2(25, 45);
myfunction2(260, 45);

//default parameter

function myfunction3(a, b = 100) {

    console.log("addition is ", a + b);
}

myfunction3(20, 40);
myfunction3(20, 4000);
myfunction3(20, 20);
myfunction3(20);


//function returning the value 

function myfunction4() {
    //multi line code 
    let k = 20, l = 55;
    return k + l;
}


let result = myfunction4();

console.log("Function which can return the value : ", result)
console.log("Function which can return the value : ", myfunction4())


//function expression

let myfunction5 = function () {
    console.log("This is the function expression. . . .")
}

myfunction5();