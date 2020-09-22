// escrever uma função que retorna a experiencia do usuário

const experiencia = x => {
    if (x > 0 && x <= 1) {
        return console.log( 'iniciante')
    } else if (x > 1 && x <= 3) {
        return console.log('intermediario')
    } else if (x > 3 && x <= 6) {
        return console.log('avancado')
    }

    return console.log('jedi master')

}

experiencia()