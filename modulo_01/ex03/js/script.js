// encontrar uma habilidade dentro do array

const temHab = function (skill) {
    if(skill.indexOf('javascript') == -1) {
        return console.log(false)
    }

    return console.log(true)
}

skills = ['javascript', 'reactjs', 'reactnative']


temHab(skills)