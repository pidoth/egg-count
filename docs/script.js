var timer = document.getElementById("timer")

var eggDay = 1549789200000
function eggTimer() {
  var d = new Date()
  var n = d.getTime()

  var timeUntilEgg = eggDay - n
  timer.innerHTML = (new Date(timeUntilEgg)).toString()
  
}

setInterval(eggTimer, 1000)
