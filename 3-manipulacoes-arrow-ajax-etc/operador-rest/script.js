// const adicionar = (...dados) => console.log(dados)

// adicionar(5, 6, 7, 8, 19, 10, 11, 12, 13, 14)
// adicionar('Gustavo', 'Maria', 'Pedro', 'Fernanda', 'Rodrigo', 'Mara')

const nomes = ['Bonieky', 'Paulo']

const adicionar = (nomes, ...novosNomes) => {
	return [
		...nomes,
		...novosNomes
	]
}

let outros = adicionar(nomes, 'Ricardo', 'Fernando', 'Maurício', 'José', 'Antonio')

console.log(outros)