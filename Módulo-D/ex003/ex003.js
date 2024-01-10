function ex003() {
    var data = new Date()
    var ano = data.getFullYear()
    var pidade = document.getElementById("iano")
    var idade = ano - pidade.value
    var fsex = document.getElementsByName("sexo")
    var genero = "nmk"
    var res = document.getElementById("defi")
    if (fsex[0].checked){
        genero = "Masculino"
        if (idade < 18) {
            pessoa = "Menino"
        } else if(idade < 50) {
            pessoa = "Homem"
        } else {
            pessoa = "Idoso"
        }
    } else if (fsex[1].checked) {
        genero = "Feminino"
        if (idade < 18) {
            pessoa = "Menina"
        } else if(idade < 50) {
            pessoa = "Mulher"
        } else {
            pessoa = "Idosa"
        }
    }
    pessoa = pessoa.toLowerCase()
    res.innerText = `Tu és um(a) ${pessoa}`
}