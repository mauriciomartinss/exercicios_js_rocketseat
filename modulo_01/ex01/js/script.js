// criar uma função para organiar as propriedades de um objeto em uma frase

const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

let montarEndereco = () => {
    return ( 
        `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`)
    
}

console.log(montarEndereco())