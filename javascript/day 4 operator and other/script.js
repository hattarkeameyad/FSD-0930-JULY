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

//operators

let p = 25, q = 35

console.log(`value of the p is ${p} and q is ${q} and there results are given below`);
console.log(`additions is ${p + q}`)
console.log(`substraction is ${p - q}`)
console.log(`multiplications is ${p * q}`)
console.log(`Division is ${p / q}`)

let r = 2234234, s = 10;

console.log("modulus division is", r % s)

console.log(2 ** 4)



