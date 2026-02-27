// let numeros = [1, 2, 3, 4]
// let outros = [... numeros, 5, 6, 7, 8]
// console.log(outros)

// let info = {
// 	nome: 'Bonieky',
// 	sobrenome: 'Lacerda',
// 	idade: 90
// }

// let novaInfo = {
// 	...info,
// 	cidade: 'Campina Grande',
// 	estado: 'Paraíba',
// 	pais: 'Brasil'
// }

// console.log(novaInfo)

const adicionarInfo = (info) => {
	return {
		...info,
		status: 'logado',
		token: 'assadgsdagsadgsadg',
		dataLogin: '27/02/2026'
	}
}

let maisInfo = {
	nome: 'Bonieky',
	sobrenome: 'Lacerda'
}

console.log(adicionarInfo(maisInfo))