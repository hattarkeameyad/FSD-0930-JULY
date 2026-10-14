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

let counter2 = 1;

const si = setInterval(() => {
    document.getElementById("output").innerText = counter2++;

}, 2000);

document.getElementById("stop").addEventListener("click", () => {

    clearInterval(si);
})


document.getElementById('output2').innerText = "Bomb blast timer started blast will be done in 5 seconds . . . "
const st3 = setTimeout(() => {
    document.getElementById('output2').innerText = "Ka boom , , , , "

}, 10000)

document.getElementById('start').addEventListener('click',()=>{
    clearTimeout(st3);
    document.getElementById('output2').innerText = "bomb is defused "

    
})

