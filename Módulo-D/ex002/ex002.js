function horaDia() {
    var planoDeFundo = window.document.getElementById("imag")
    var mensagem = window.document.getElementById("mens")
    var horario = window.document.getElementById("hora")
    var data = new Date;
    var hora = data.getHours();
    var minutos = data.getMinutes();
    alert(horario)
    if (hora < 6) {
        planoDeFundo.style.backgroundImage = "url('meianoite.png')"
        mensagem.innerHTML = "<h1>Boa noite</h1>"
        mensagem.style.fontSize = "2em"
        horario.innerHTML = hora + ":" + minutos
    } else if (hora < 12) {
        planoDeFundo.style.backgroundImage = "url('manha.png')"
        mensagem.innerHTML = "<h1>Bom dia</h1>"
        mensagem.style.fontSize = "2em"
        horario.innerHTML = hora + ":" + minutos
    } else if (hora < 18) {
        planoDeFundo.style.backgroundImage = "url('dia.png')"
        mensagem.innerHTML = "<h1>Boa tarde</h1>"
        mensagem.style.fontSize = "2em"
        horario.innerHTML = hora + ":" + minutos
    }  else {
        planoDeFundo.style.backgroundImage = "url('noite.png')"
        mensagem.innerHTML = "<h1>Boa noite</h1>"
        mensagem.style.fontSize = "2em"
        horario.innerHTML = "<h2>" + hora + ":" + minutos + "</h2>"
    }
}