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

let arrb = [12, 1, 576, 12, 46456, 234]
let variable = arrb.sort((a, b) => b - a)
console.log(variable)


//math functions

let aa = 20, bb = 25, c = 100;

let maximum_value = Math.max(aa, bb, c)
let min_val = Math.min(aa, bb, c)

console.log("Minimum", min_val)
console.log("Maximum value", maximum_value)

let dd = 3.1
let de = 3.9

console.log("celing", Math.ceil(dd))

console.log("Floor", Math.floor(de))

let df = 3.523456789
console.log(Math.round(df))

let mynumber=25;

console.log(Math.sqrt(mynumber))

mynumber=525;
console.log(Math.cbrt(mynumber))

aa=20,bb=2
console.log(Math.pow(aa,bb))


console.log("This is the random numbewr ",Math.random())