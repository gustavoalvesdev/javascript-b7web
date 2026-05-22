function loadPosts() {

    document.getElementById('posts').innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res) {
            return res.json()
        })
        .then(function(json) {
            document.getElementById('posts').innerHTML = json.length + ' posts'
        })
        .catch(function() {
            console.log('Deu erro')
        })
}