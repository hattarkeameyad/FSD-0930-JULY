/* while( condition of the loop){

} */

console.log("Before loop")
let a = 10;
while (a < 10) {
    // console.log("loop started")
    console.log("This is loop no :  ", a);
    a++;


}
console.log("--------------------do while loop---------------------------");
a = 10;
do {
    console.log("This is loop no :  ", a);
    a++;

} while (a < 10);
// console.log("Loop finished")

//for loop
console.log("----------For loop------------------")
for (let b = 1; b <= 10; b++) {

    console.log("Loop Number:  ", b);
}


console.log("Lets see the factorial program.")


let result = 1;
for (let a = 1; a <= 5; a++) {

    result = result * a;

}

console.log("Factorial of 5 is : ", result)


//for of is used when you need to use the values directly

console.log("This is the for of array");
let arr1=[12,121,34,64,123,123,6423,34,64,123,6423]

for(let value of arr1 ){
    console.log("Element is : ",value)
}

//for in is used when you want index of that perticular array
console.log("----------this is for in array ----------")
for(let index in arr1){
    console.log("Index number is : ",index, " and the value is ",arr1[index] )
}


