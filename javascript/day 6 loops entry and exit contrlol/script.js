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
