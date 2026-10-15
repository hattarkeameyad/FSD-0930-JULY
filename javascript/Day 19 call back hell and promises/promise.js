
console.log("the promise is started")
const p1 = new Promise((resolve, reject) => {

    let myres = true;
    if (myres) {
        resolve("status is true");
    }
    else {
        reject("The status is failed . . . .")
    }
})

p1.then(
    result => {
        console.log(result)
    }
)
    .catch(
        error => {
            console.log(error)
        }
    )

console.log("the promise is finished. . .")


let mood = "bad"

const p2 = new Promise((resolve, reject) => {

    if (mood === "good") {
        setTimeout(() => {
            console.log("Please take 100000 rs as my mood is good")
        }, 2000)
        resolve("operation successfull .. . ");
    }
    else {

        setTimeout(() => {
            console.log("ghari jaa . . .. ")
        }, 2000)
        reject("No money for you . . . .")
    }
})

p2.then(resolve => {
    console.log(resolve)
})
    .catch(er => {
        console.log(er)
    }
    )