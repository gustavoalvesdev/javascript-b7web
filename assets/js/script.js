class Person {

    profession = 'Programmer'

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let p1 = new Person('Joao', 23)
let p2 = new Person('Maria', 25)
let p3 = new Person('Pedro', '27')

console.log(p1.name)
console.log(p2.name)
console.log(p1.profession)
console.log(p2.profession)
p1.age = 45
console.log(p1.age)