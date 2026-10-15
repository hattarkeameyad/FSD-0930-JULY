
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