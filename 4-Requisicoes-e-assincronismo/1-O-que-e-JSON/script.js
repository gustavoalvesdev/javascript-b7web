let pessoa = {
    nome: 'Gustavo', 
    idade: 34,
    caracteristicas: ['Evangélico', 'Programador', 'Brasileiro'],
    habilidades: {
        falar: function() {
            return 'Oi, eu estou falando!';
        },
        programar: linguagem =>  `Estou programando na linguagem ${linguagem}`
        
    }
};

console.log(pessoa.caracteristicas[1]);
console.log(pessoa.habilidades.falar());
console.log(pessoa.habilidades.programar('JavaScript'))