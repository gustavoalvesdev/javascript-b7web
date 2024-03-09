// let cores = ['preto', 'branco', 'azul', 'vermelho'];
// cores.push('verde');

let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
];

// for (i = 0; i < cores.length; i++) {
//     console.log(cores[i]);
// }

// for (let i in cores) {
//     console.log(cores[i]);
// }

// for (let cor of cores) {
//     console.log(cor);
// }
for (let cor of cores) {
    console.log(`Nome: ${cor.nome.toUpperCase()} - ${cor.qt}`);
}