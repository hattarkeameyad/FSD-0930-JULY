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


// function puppy() {

// }
// let puppy = function () {

// }
let puppy = () => {
    console.log("woof woof woof");
}

puppy(234, 123, 12);


(() => {
    console.log("This is iefe . . . ")
})();


// Array Functions and other stuff


let arrp = [1, 2, 3, 4, 5, 45, 123];

arrp.forEach((item) => {

    console.log("|")
    console.log(item);

});


let prices = [245, 345, 67, 1234, 7688];

let updated_price = prices.map((item) => {
    return item = item - ((item / 100) * 20)
})

for (values of updated_price) {
    console.log(values)
}



//filter method

arr1 = [12, 43, 223, 46, 78, 54, 246, 11, 8, 654, 226, 333, 6, 99]


let evenNumbers = arr1.filter((item) => {

    return item % 2 === 0;
})

evenNumbers.forEach((item) => {
    console.log("even number ", item)
})

let arr4 = [123, 11, 23, 2311232, 123, 77]

let haseven = arr4.some((item) => {
    return item % 2 === 0;
})

console.log("This checks if a single element is even ", haseven)

let every_check = arr4.every((item) => {
    return item % 2 === 0;

})

console.log("is every element even number : ", every_check)

//find method

let found_number = arr4.find((item) => {
    return item % 2 === 0;

})

console.log("The first value which is satisfying the condition is : ", found_number)


let arr5 = [1, 2, 3, 4, 5]

let product = arr5.reduce((prev, current) => prev + current, 1)
console.log(product)
console.log((product) / arr5.length)


//array push method

arr5.forEach((item) => {
    console.log("Array before method : ", item);
})


arr5.push(99999);
arr5.push(88888);



console.log("Array after method : ", arr5);


let popedvalue = arr5.pop();
console.log("Array after method : ", arr5, " and popped value is ", popedvalue);

popedvalue = arr5.pop();
console.log("Array after method : ", arr5, " and popped value is ", popedvalue);

popedvalue = arr5.pop();
console.log("Array after method : ", arr5, " and popped value is ", popedvalue);

popedvalue = arr5.pop();
console.log("Array after method : ", arr5, " and popped value is ", popedvalue);

popedvalue = arr5.pop();
console.log("Array after method : ", arr5, " and popped value is ", popedvalue);

arr5.push(23,12,34,534,123);
console.log(arr5)
let shifted = arr5.shift();
console.log("Array after method : ", arr5, " and shifted value is ", shifted);


 shifted = arr5.shift();
console.log("Array after method : ", arr5, " and shifted value is ", shifted);


 shifted = arr5.shift();
console.log("Array after method : ", arr5, " and shifted value is ", shifted);


 shifted = arr5.shift();
console.log("Array after method : ", arr5, " and shifted value is ", shifted);

console.log(arr5)

arr5.unshift(11,22,33,54,44,33,22,11,10)

console.log(arr5)

