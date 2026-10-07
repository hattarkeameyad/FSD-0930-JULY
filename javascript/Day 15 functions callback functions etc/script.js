function machine1() {
    console.log("Another machine 1")
}

function machine2(x) {
    console.log("this is machine 2 ")
    x();
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
function mainfunction(callback) {

    callback();
    console.log("Okay now bye");

}

mainfunction(sayhello)

console.log("are you still here ???");