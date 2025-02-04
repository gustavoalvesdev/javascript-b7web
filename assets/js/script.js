let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra', 'Uva']

//let bigFruits = fruits.filter(fruitName => fruitName.length > 4)

//console.log(bigFruits)

// let verdadeiro = fruits.every(fruitName => fruitName.length > 3)

// console.log(verdadeiro ? 'Todas são maiores do que 3' : 'Não são maiores do que 3')

// let verdadeiro = fruits.some(fruitName => fruitName.length > 3)
// console.log(verdadeiro ? 'Algumas são maiores do que 3' : 'Não sõa maiores do que 3')

let temUva = fruits.includes('Uva')
console.log(temUva ? 'Sim tem uva' : 'Não tem uva')