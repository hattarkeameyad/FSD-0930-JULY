
let myval = "ohello world . . . H !M"

console.log(myval.length)

console.log("The charecter at this index number is  3", myval.charAt(8));

console.log("Print the index of this charecter ", myval.indexOf('w'))

console.log("Last occurence of the H is ", myval.lastIndexOf("H"))

console.log("To Upper case", myval.toUpperCase())

console.log("To Lower case ", myval.toLowerCase())

console.log("Does this string starts with o", myval.startsWith('o'))

console.log("ends with  M ?? ", myval.endsWith('M'))

let namea = "Sharukh khan"
console.log(namea.replace("k", "aa"))
console.log(namea.replaceAll("k", "abcdedf"))

let quote = "The quick | brown fox Jumps | over the lazy dog"

let aftersplict = quote.split(' ');

console.log(quote)
console.log(aftersplict)

let another_val = " Hello world welcome to techsurya it solution "

let after_slice = another_val.slice(15);
console.log(after_slice)

console.log("THis si before trim"+another_val+"This is after trim"+another_val.trim())
