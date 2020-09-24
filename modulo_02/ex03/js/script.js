const nomes = ["diego", "gabriel", "lucas"]

let lista = document.querySelector('#list')

function pushToList(list) {
    for(element of list) {
        lista.insertAdjacentHTML ( 'afterbegin',`<li>${element}</li>`)
    }
}

pushToList(nomes)


