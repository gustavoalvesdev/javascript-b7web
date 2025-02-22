class Person {
    _age = 10
    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lasName = lastName
    }

    takeAStep() { this.step++ }

    get age() { return this._age }

    get fullName() {
        return `${this.firstName} ${this.lasName}`
    }

    set age(newAge) {
        if (typeof newAge == 'number') this._age = newAge
    }
}


let p1 = new Person('João', 'Silva')
let p2 = new Person('Maria', 'Leite')
let p3 = new Person('Pedro', 'Duarte')

p1.age = 20
console.log(`${p1.fullName} tem ${p1.age} anos`)
