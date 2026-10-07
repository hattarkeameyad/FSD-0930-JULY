function machine1() {
    console.log("Another machine 1")
}

function machine2(x) {

    x();
    console.log("this is machine 2 ")
}


machine2(machine1)
//
//
//
//
//

function sayhello() {
    console.log("Hi hello how are you ")
}
function saybye() {
    console.log("GOod bye mandal abhari ahe . . . .")
}
function mainfunction(callback) {

    callback();
    console.log("Okay now bye");

}

mainfunction(saybye)
console.log("are you still here ???");


//closure




function outerfuntion() {

    let outervariable = "Hellow this is outer variable";

    function innerfunction() {
        console.log(outervariable);
    }
    console.log(innerfunction)
    console.log(innerfunction())

    return innerfunction
}

const result = outerfuntion();

result();
result();
result();


let puppy = function () {
    console.log("Bhau Bhau")
}

console.log(puppy)
console.log(puppy())


//closure counter function

function counter() {

    let count = 0;
    function increment() {
        console.log(++count);
    }
    return increment
}

const incr = counter();

incr();
incr();
incr();
incr();
incr();
incr();


function setupbutton(message) {
    const button = document.getElementById("button");

    if (!button) {
        console.log("The button is not pressed or found . . . . ")
        return;
    }

    button.addEventListener("click", function () {
        console.log(message);
    })

}
setupbutton("Button is clicked")
