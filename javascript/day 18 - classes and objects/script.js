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

const d1 = new dog('pomerian','pet');

d1.print()
d1.speak()