let pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Alves',
    social: {
        facebook: 'devgugaofc',
        instagram: 'gustavoalvesmarketing'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    },
};


let { nome, sobrenome, idade = 0 } = pessoa;

console.log(nome, sobrenome, idade);