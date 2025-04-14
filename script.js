function createPerson(name, lastName, age) {
    return {
        name, 
        lastName,
        age
    }
}

let person1 = createPerson('Bonieky', 'Lacerda', 90)
let person2 = createPerson('Junior', 'Fulano', 20)

console.log(person1.name)