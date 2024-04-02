function tymsg() { 
    document.getElementById("thanku").style.opacity = "100";
    setTimeout(() => {
      document.getElementById("thanku").style.opacity = "0"
    }, 1000)
  }
{
  var d = new Date();
}

function rating(r) {
  return r
}

function msgchange(a){
  document.getElementById("rating").innerHTML = a
  document.getElementById("month").innerHTML = d.getMonth
  document.getElementById("day").innerHTML = d.getDate
  document.getElementById("time").innerHTML = d.getHours
}