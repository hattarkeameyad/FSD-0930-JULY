
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

document.getElementById("btn_promise").addEventListener('click', () => {
    let myvar = document.getElementById("txt_number");

    let number = myvar.value
    number = parseInt(number);

    const p3 = new Promise((resolve, reject) => {

        resolve(number)
    })

    p3.then((number) => {
        number = number * 10;
        return number;
    })
        .then((number) => {
            number = number * 10;
            return number;
        })
        .then((number) => {
            number = number * 10;
            return number;
        })
        .then((number) => {
            number = number * 10;
            return number;
        })
        .then((number) => {
            number = number * 10;
            return number;
        })
        .then((number) => {
            number = number * 10;
            console.log(number)

            return number;
        })
        .then((number) => {
            number = number * 10;
            number = "434"
            return number;
        })
        .then((number) => {
            number = number * 10;
            if (number === 20)
                return number;
        })
        .then((number) => {
            document.getElementById("txt_number").value = number
        })
    p3.catch(error => {
        console.log(error)
    })
})


//Promise methods . . . .

const promise_aa = Promise.resolve("Resolved right away");

const promise_bb = new Promise(resolve =>
    setTimeout(() => {
        resolve("Issue is now resolved. . .")
    }, 10000)
)

Promise.all([promise_aa, promise_bb]).then(value => console.log(value))

    .catch(error => console.log(error))


Promise.race([promise_aa, promise_bb]).then(value => console.log("This is the result of promise race ", value))


const prom_aa = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise with 5 second completed")
    }, 5000);
})

const prom_bb = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise with 2 second completed")
    }, 2000);
})

const prom_cc = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise with 10 second completed")
    }, 10000);
})

const prom_dd = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise with 15 second completed")
    }, 15000);
})

// Promise.race([prom_aa, prom_bb, prom_cc, prom_dd]).then(value => console.log("Race value ", value))

Promise.all([prom_aa, prom_bb, prom_cc, prom_dd]).then(value => console.log("promise all ", value))
