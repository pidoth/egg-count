var timer = document.getElementById("timer")

var eggDay = 1549789200000
function eggTimer() {
  var d = new Date()
  var n = d.getTime()

  var timeUntilEgg = eggDay - n
  if(timeUntilEgg >= 0) {
    timer.innerHTML = (new Date(timeUntilEgg)).toString()
  } else {timer.innerHTML = "Await Further Instruction."
}

setInterval(eggTimer, 1000)
