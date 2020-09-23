// criar um botão que ao ser clicado, executará uma função que gera um quadrado novo

const btn = document.querySelector('#generate') 
const square = document.querySelector('.square')

let container = document.querySelector('#container')

btn.addEventListener('click', function() {
    container.insertAdjacentHTML('afterend', '<div class="square" onmouseover="getRandomColor()"></div>')
})


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return (
        console.log(color),
        square.style.backgroundColor = color
    )
}

// vou ter que revisar essa parte dos vídeo!

