class person {

    constructor(name, designation) {

        this.name = name;
        this.designation = designation;
    }
    printsc() {
        console.log(this.name, this.designation)
    }
    printname = () => {
    }
}

const p1 = new person("Ameya", "Devops");

const p2 = new person("Shubham", "tester")

p1.printsc();
p2.printsc();


class animal {
    constructor(animal) {
        this.animal = animal;
    }
    speak() {
        console.log("Animal is speaking . . . . this is parent classs", this.animal)
    }
}

class dog extends animal {

    constructor(dogbreed, animal) {
        super(animal)
        this.dogbreed = dogbreed
    }
    print() {
        console.log("dog is barking  . . . ", this.dogbreed)
    }
}

const d1 = new dog('pomerian', 'pet');

d1.print()
d1.speak()

//timer functions

console.log("Code started . . .");

const tout = setTimeout(() => {
    console.log("Time is up . . . . ");
}, 6000);

console.log("Here it ends all  . . . . . ");

let count = 0;
const inter = setInterval(() => {
    console.log("Hey . . . .  R you there . . . . .", count++);

}, 2000)


document.getElementById('btn_fetch').addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('output').innerText = "The status is fetched . . "
    }, 3000)
})



