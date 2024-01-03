async function ex001() {
    edit = prompt("O que você quer adicionar na página?")
    edit = "<p>" + edit + "</p>"
    ex = document.getElementById("ex01")
    ex.style.background = "green"
    ex.innerHTML = edit
}

async function ex002() {
    edi = prompt("O que você quer adicionar na página?")
    edi = "<p>" + edi + "</p>"
    exe = document.querySelector('div#ex02')
    exe.style.color = "blue"
    exe.innerHTML = edi
}