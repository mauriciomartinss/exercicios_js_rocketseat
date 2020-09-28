// criar um botão que ao ser clicado, executará uma função que gera um quadrado novo e que muda cor quando a
// setinha passar por cima deles

const btn = document.querySelector('#generate') 

let container = document.querySelector('#container')

// consegui arrumar procurando na internet, com resoluções de exercícios semelhantes. mas básicamente os erros
// era: não ter colocado o event listener que ia trocar a cor dentro da função e, criar a variável 'square'
// de forma que ele pegava os valores (que não existiam) no html que resultava um erro.

btn.addEventListener('click', function() {
    let square = document.createElement('div')

    square.style.width = '100px'
    square.style.height = '100px'
    square.style.display = 'inline-block'
    square.style.backgroundColor = 'red'
    square.style.margin = '20px'
    
// essa função foi disponibilizada pelo exercício
    square.addEventListener('mouseover', function() {
        var letters = "0123456789ABCDEF";
        var color = "#";
    
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color),
        square.style.backgroundColor = color
        btn.style.backgroundColor = color
        
        
    })

    container.appendChild(square)
    
})