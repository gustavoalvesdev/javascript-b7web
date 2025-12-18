//let lista = [49, 4, 9, 16, 25];

let pessoas = [
    {id: 1, nome: 'Bonieky', sobrenome: 'Lacerda'},
    {id: 2, nome: 'Paulo', sobrenome: 'XYZ'},
    {id: 3, nome: 'Fulano', sobrenome: 'Da Silva'}
];

// let lista2 = lista.find(item => item < 10);
// let lista2 = lista.findIndex(item => item > 5 && item < 10);

// let pessoa = pessoas.find(item => item.sobrenome == 'XYZ');
// let pessoa = pessoas.find(item => item.id == 3);
let pessoa = pessoas.findIndex(item => item.id == 2);

let res = pessoa;

console.log(res);