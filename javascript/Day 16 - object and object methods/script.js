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