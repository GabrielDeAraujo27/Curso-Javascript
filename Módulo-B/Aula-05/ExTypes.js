function ex001() {
    var answer = 5
    type = (typeof answer)
    alert(type + ': ' + answer)

    var answer = 5.8
    type = (typeof answer)
    alert(type + ': ' + answer.toFixed(2))

    var answer = 'Letras'
    type = (typeof answer)
    alert(type + ': ' + answer)

    var answer = true
    type = (typeof answer)
    alert(type + ': ' + answer)
}