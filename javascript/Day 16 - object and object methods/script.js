let person = {
    name: "ameya",
    designation: "Devops",
    department: "development",
    run: function () {
        console.log("This is the function inside and object  . . .. ")

    }
}

// person.run();
// console.log(person.run)


console.log(person.name, " ", person.designation, " ", person.department, " ", person.run());

person.name = "Iron Man";

console.log(person)

Object.freeze(person);

person.name = "Captain america";
console.log(person)

let car = {
    name: "maruti",
    engine: "petrol",
    cc: "799cc",
    transmission: "manual"
}

console.log(car)

delete car.engine;
console.log(car)

let merged = { ...person, ...car }

console.log("After merging . . . ", merged)


let arr_obj = Object.entries(car)

console.log(arr_obj)

arr_obj[0][0] = "The value is changed "

arr_obj[2][0] = "Value altered"

let arr_obj_keys = Object.keys(car);
console.log(arr_obj_keys)

let arr_obj_values = Object.values(car)
console.log(arr_obj_values)

let student = {
    name: "Akshay Kumar",
    desig: "actor",
    class: "Bollywood"
}

console.log("before sealing", student)


Object.seal(student)

delete student.desig;

student.name = "Sharukh khan"
console.log(student)


//closure security password check

let outerfunction = () => {
    let setpassword = "1234"
    return {
        checkpassword: function (input) {
            return input === setpassword
        }
    }
}

let uninput_password = "1234"
const ofunction = outerfunction();
let result = ofunction.checkpassword(uninput_password);
if (result) {
    console.log("Valid password")
}
else {
    console.log("password is invalid")
}