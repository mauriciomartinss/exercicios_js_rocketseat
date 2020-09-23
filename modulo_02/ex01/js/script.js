// criar um botão que ao ser clicado, executará uma função que gera um quadrado novo

const btn = document.querySelector('#generate') 
let container = document.querySelector('#container')

btn.addEventListener('click', function() {
    container.insertAdjacentHTML('afterend', '<div class="square"></div>')
    
})