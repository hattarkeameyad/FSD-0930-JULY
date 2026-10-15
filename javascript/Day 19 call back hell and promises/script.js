let puppy = () => {
    console.log("woof");
}
let cat = () => {
    console.log("meow");
}

let animal = (rec) => {
    console.log("animal being sorted")
    rec();
}
animal(puppy)

console.log("Operation finished")


//callback hell

setTimeout(() => {
    console.log("Step 1 is completed")
    setTimeout(() => {
        console.log("Step 2 is completed")
        setTimeout(() => {
            console.log("Step 3 is completed")
            setTimeout(() => {
                console.log("Step 4 is completed")
                setTimeout(() => {
                    console.log("Step 5 is completed")
                    setTimeout(() => {
                        console.log("Step 6 is completed")
                        setTimeout(() => {
                            console.log("Step 7 is completed")
                            setTimeout(() => {
                                console.log("Step 8 is completed")
                                setTimeout(() => {
                                    console.log("Step 9 is completed")
                                }, 2000)
                            }, 2000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)
console.log("End of callbackfunction")