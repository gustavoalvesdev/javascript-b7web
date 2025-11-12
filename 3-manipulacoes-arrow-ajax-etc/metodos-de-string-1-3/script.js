let nome = 'Gustavo Alves da Silva'

// quantidade de caracteres
let resultadoQtd = nome.length

// Procura o texto 'Alves' na string e retorna a posição
let temAlves = nome.indexOf('Alves')    
temAlves = nome.indexOf('Santos')

if (temAlves > -1) {
    console.log('Gustavo Pertence à Família Santos')
} else {
    //console.log('Gustavo Não Pertence à Família Santos')
}


//console.log(temAlves)

let str = 'hello world'

console.log(str.indexOf('world'))