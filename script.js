class Person {
    age = 0

    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    grade = 0

    constructor(name, grade) {
        super(name)
        this.grade = grade
    }
}

let student = new Student('Maria', 5)
student.age = 25

console.log(student)