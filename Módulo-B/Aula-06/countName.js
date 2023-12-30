function ex003() {
    nome = prompt('Digite seu nome? ')
    document.write(`<strong>${nome}</strong>, seu nome tem ${nome.length} letras<br>`)
    document.write(`${nome.toUpperCase()}<br>`)
    document.write(`${nome.toLowerCase()}`)
}