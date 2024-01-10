function ex003() {
    var data = new Date()
    var ano = data.getFullYear()
    var pidade = document.getElementById("iano")
    var anoNasc = pidade.value
    var idade = ano - anoNasc.value
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
    } else {
        alert("Houve um erro, prencha os campos corretamente")
        pessoa = "Não binario"
    }
    if (anoNasc > ano) {
        alert("Houve um erro, prencha os campos corretamente")
        pessoa = "erro"
    }
    res.innerText = `Tu és um(a) ${pessoa}`
}