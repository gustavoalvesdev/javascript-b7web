class Person {
    age = 0

    static hands = 2
    constructor(name) {
        this.name = name
    }

    static sayHi() {
        console.log(`Oi`)
    }
}

p1 = new Person()
p1.sayHi()