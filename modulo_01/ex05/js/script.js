// fazer uma função que retorna uma frase com os elementos de um array (iterar com for...of)

const usuarios = [
    {
        nome: 'diego',
        habilidades: ['js', 'reactjs', 'redux']
    },
    {
        nome: 'gabriel',
        habilidades: ['vuejs', 'ruby on rails', 'elixir']
    }
]

let arrayMapeado = []

usuarios.map((users) => {
        arrayMapeado.push(`o ${users.nome} possui as habilidades: ${users.habilidades.join(', ')}`)
})

console.log('[com map]', arrayMapeado)

console.log('==============================================================================================')

arrayMapeado = []

const mapeadorDeUsuario = function(users) {
    for (user of users) {
        arrayMapeado.push(`o ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`)
    }

    return console.log('[com for...of]', arrayMapeado)
}  

mapeadorDeUsuario(usuarios)


// obs: é o mesmo resultado!



