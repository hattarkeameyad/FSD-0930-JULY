let a = 20;
let b = "20";

console.log(typeof (a));
console.log(`type of variable is ${a} and its type is  ${typeof (a)}`);
console.log(`type of variable is ${b} and its type is  ${typeof (b)}`);

var c = true;

console.log("This is the type of the c  " + typeof (c))

let p;

console.log(typeof (p));

let q = null;

console.log(q);

console.log(typeof (q))

let city = "cspn";
let names = "ameya";
let job = "devops engineer";

console.log("City of this person is " + city + " name of this person is " + names + " the job of this person is " + job);

console.log(`City of this person is ${city} name of this person is ${names} and the job of this person is ${job}`)


let pq= [20,12,56,21];

console.log(typeof(pq));

console.log(pq[2]+" "+pq[0]+" "+pq[3]);

//object
//it stores the data in key value pair format

//water : it is a liquid important for life 

let person={
    name: "ameya",
    sex: "male",
    job: "devopsengineer",
    mobilenumber: 92384789234
};

console.log(person.name +" "+person.sex+" "+person.job+" "+person.mobilenumber+" ")


//function

function myfunction(){

    console.log("My first funtionction . . . .")
}


myfunction();
myfunction();

function returning_value(){
    return "Bye Bye . . . ";

}

let recev_bucket=returning_value();

console.log (returning_value());


console.log("Thjis is when we have received value from the function in a variable    "+ recev_bucket)


console.log(typeof(returning_value))