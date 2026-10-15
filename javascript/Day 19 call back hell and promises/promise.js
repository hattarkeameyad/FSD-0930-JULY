
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
