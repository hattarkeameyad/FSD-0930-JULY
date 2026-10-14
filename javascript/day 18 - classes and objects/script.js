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