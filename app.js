function atualizar() {
    var newTime = new Date()
    var time = corrigirHorario(newTime.getHours()) + ':' + corrigirHorario(newTime.getMinutes()) + ':' + corrigirHorario(newTime.getSeconds())
    const displayTime = document.querySelector('.display')
    displayTime.textContent = time

}

function corrigirHorario(num) {
    if (num < 10) {
        num = '0' + num
    }
    return num
}

//start
atualizar()
setInterval(atualizar, 1000)
