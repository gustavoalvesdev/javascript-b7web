class Person {

    profession = 'Programmer'
    steps = 0

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    takeAStep() {
        this.steps++
    }

    setAge(newAge) {
        if (typeof newAge == 'number') this.age = newAge
    }
}

let p1 = new Person('Joao', 23)
let p2 = new Person('Maria', 25)
let p3 = new Person('Pedro', 27)

p1.takeAStep()
p1.takeAStep()

console.log(`Passos de ${p1.name}: ${p1.steps}`)

p2.setAge(66)

console.log(`${p2.name} agora tem ${p2.age} anos`)
