let a = 25;
let b = a;
console.log(`this is value of a  ${a} and value of b ${b} after assigning`);
b = 45;

console.log(`this is value of a  ${a} and value of b ${b} or while checking mutablity`);


//now we will check the mutability

let arr1 = [134, 222, 333]
let arr2 = arr1;

console.log(`value of the arr1 ${arr1}`)
console.log(`value of the arr2 ${arr2}`)

arr1[1] = 888888;

console.log(`after modifying array 1 ${arr1}`)
console.log(`after modifying array 1 ${arr2}`)


arr2[2] = 9898989898;

console.log(`after modifying array 2 ${arr1}`)
console.log(`after modifying array 2 ${arr2}`)

//operators arithmatic

let p = 25, q = 35

console.log(`value of the p is ${p} and q is ${q} and there results are given below`);
console.log(`additions is ${p + q}`)
console.log(`substraction is ${p - q}`)
console.log(`multiplications is ${p * q}`)
console.log(`Division is ${p / q}`)

let r = 2234234, s = 10;

console.log("modulus division is", r % s)

console.log(2 ** 4)


//Relational Operators
let t = 50, u = 60;
if (t > u) {

    console.log("Yes t is greater");
}
else {
    console.log("NO t is smaller")
}

t = 30, u = 60;
if (t < u) {

    console.log("Yes t is smaller");
}
else {
    console.log("NO t is greater")
}

t = 60, u = 60;
if (t <= u) {

    console.log("Yes t is smaller");
}
else {
    console.log("NO t is greater")
}


t = 60, u = 60;
if (t >= u) {

    console.log("Yes t is smaller");
}
else {
    console.log("NO t is greater")
}


t = 30, u = "30";
if (t == u) {

    console.log("yes both values are similar");
}
else {
    console.log("NO value not same")
}


t = 30, u = "30";
if (t === u) {

    console.log("yes both values are similar");
}
else {
    console.log("No value not same")
}


t = 30, u = "30";
if (t !== u) {

    console.log("yes both values are similar");
}
else {
    console.log("No value not same")
}



//Logical Operators

let ab=20,ba=50,ca=20;

console.log(ab<ba && ca<ba)

console.log(ab>ba || ca<ba)

console.log(!(ab>ba))


//assignment operators

let z=20;

z+=2;
console.log("value of z : ", z)
z-=12;
console.log("value of z : ", z)
z*=2;
console.log("value of z : ", z)

z/=10;
console.log("value of z : ", z)

z%=10;
console.log("value of z : ", z)

z**=8;
console.log("value of z : ", z)


//increament and decrement pre and post


let xz=10;

console.log("Using Pre increment ",++xz)
console.log("after effect",xz)

console.log("before value ",xz)
console.log("Using Pre increment ",xz++)
console.log("after effect",xz)

//ternary operators

if(a>b){
    //this block will be executed 
}

let chintu=2, pintu=3;
let bucket=(chintu>pintu)?"chintu":"pintu";

console.log(bucket);

//unary operator


a=20,b="25";

console.log(-(a-(+b)))


//conditional statements
a=40,b=130
if(a>b){
    console.log("The a is greater");
}

else{
    console.log("No a is not greater");
}