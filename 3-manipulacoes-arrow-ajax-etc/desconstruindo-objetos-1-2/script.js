let pessoa = {
    nome: 'Gustavo',
    idade: 34,
    social: {
        facebook: 'devgugaofc',
        instagram: {
            url: 'gsutavoalvesmarketing',
            seguidores: 35
        }
    },
};


function pegarNomeCompleto({ nome, sobrenome = 'Silva' , social: { instagram: { url: instagram } }}) {
    return `${nome} ${sobrenome} Siga em @${instagram}`;
}

console.log(pegarNomeCompleto(pessoa));
