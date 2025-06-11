let person = {
    name: 'Bonieky', 
    lastName: 'Lacerda',
    age: 90,
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}

console.log(person.getFullName())