const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    ...defaultUser,
    name: 'Bonieky',
    email: 'suporte@b7web.com.br'
}

let adm1 = {
    ...defaultUser,
    name: 'Admin Boladão',
    email: 'adm@adminboladao.com.br',
    level: 2
}

console.log(adm1)