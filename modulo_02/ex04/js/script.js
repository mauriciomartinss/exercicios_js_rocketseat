let nomes = []

let lista = document.querySelector('#list')
let name = document.querySelector('#name')

name.focus()

function adicionar() {
    nomes.push(name.value)
    pushToList(name.value)
    name.value = ''
    name.focus()
}

function pushToList(name) {
    lista.insertAdjacentHTML( 'afterbegin',`<li>${name}</li>`)
    
}




