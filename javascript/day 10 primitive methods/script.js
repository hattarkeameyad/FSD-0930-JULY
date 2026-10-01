let m = 2.236345;
let af = m.toFixed(2)
console.log("after using to fixed", af)

af = m.toPrecision(2);
console.log("after using precision", af)

let afs = m.toString();

console.log(typeof (afs))

let a = "234aasd";

let abs = parseInt(a)
console.log(typeof (abs), "and value of a and abs ", a, abs)

let fl = "2.3112";

console.log(parseInt(fl))
console.log(parseFloat(fl))


let ast = [92, 12, 4, 66, 14, 33, 22]

console.log(ast.sort())

let stringarray = ["aksha", "shubham", "karthik", "vaibhav", "Parth"]

console.log(stringarray.sort())
