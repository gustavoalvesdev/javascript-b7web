function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura...')

        setTimeout(function() {
            resolve('40º na sombra')
        }, 2000)
      
    })
}

// USANDO A PROMISE
console.log('Código antes')

let temp = pegarTemperatura()

console.log('Código durante')

temp.then(function(resultado) {
    console.log(`TEMPERATURA: ${resultado}`)
}).catch(function(err) {
    console.log(`ERRO: ${err}`)
})

console.log('Código depois')