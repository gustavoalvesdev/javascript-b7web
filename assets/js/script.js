function validaUsuario(usuario, senha) {
    return usuario === 'pedro' && senha == '1234';
}

let usuario = 'pedro';
let senha = 1234;

console.log('Usuário logou? ' + (validaUsuario(usuario, senha) ? 'Sim' : 'Nâo'));