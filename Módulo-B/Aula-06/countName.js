function ex003() {
    nome = prompt('Digite seu nome? ')
    div = document.getElementById("Aula-06")
    tot = `<strong>${nome}</strong>, seu nome tem ${nome.length} letras<br>`
    tot = tot + `${nome.toUpperCase()}<br>`
    tot = tot + (`${nome.toLowerCase()}`)
    div.innerHTML = tot
}