function ex001() {
    edit = prompt("O que você quer adicionar na página?")
    edit = "<br>" + "<p>" + edit + "</p>"
    div = document.getElementById("ex01")
    div.innerHTML = edit
}