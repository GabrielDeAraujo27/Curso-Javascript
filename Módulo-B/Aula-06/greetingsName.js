function ex002() {
    var nome = prompt('Qual é o seu nome? ')
    if (nome == null){
        alert('Encerrado.')
    } else {
        alert(`Olá, ${nome}!`)
    }
}