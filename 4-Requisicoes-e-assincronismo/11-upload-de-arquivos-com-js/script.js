let enviar = async() => {
    let arquivo = document.getElementById('arquivo').files[0]

    let body = new FormData()
    body.append('titulo', 'bla bla bla')
    body.append('arquivo', arquivo)

    let req = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}