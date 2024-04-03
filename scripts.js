function tymsg() { 
    document.getElementById("thanku").style.opacity = "100";
    setTimeout(() => {
      document.getElementById("thanku").style.opacity = "0"
    }, 1000)
  }

{
  var d = new Date()
  var month = d.getMonth()
  var day = d.getDate()
  var time = d.getHours()
}

function rating(r) {
  return r
}

function msgchange(a){
  document.getElementById("rating").innerHTML = a
  document.getElementById("month").innerHTML = month
  document.getElementById("day").innerHTML = day
  document.getElementById("time").innerHTML = time
}