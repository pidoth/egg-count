var timer = document.getElementById("time")

var eggDay = 1549789200000
function eggTimer() {
  var d = new Date()
  var n = d.getTime()

  var timeUntilEgg = eggDay - n
  if(timeUntilEgg < 0) {
    var timeUntilDate = new Date(timeUntilEgg)
    timer.innerHTML = (timeUntilDate.getDays() * 24 + timeUntilDate.getHours()) + ":" + (timeUntilDate.getMinutes()  % 60) + ":" + (timeUntilDate.getSeconds() % 60)
  } else {timer.innerHTML = "Await Further Instruction."}
}

setInterval(eggTimer, 1000)
