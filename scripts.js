function tymsg() { 
    document.getElementById("thanku").style.opacity = "100";
    setTimeout(() => {
      document.getElementById("thanku").style.opacity = "0"
    }, 1000)
  }

{

}

function rating(r) {
  return r
}

function msgchange(a){
  const d = new Date()
  let month = d.getMonth()
  let date = d.getDate()
  let time = d.getTime()
  document.getElementById("rating").innerHTML = a
  document.getElementById("month").innerHTML = month
  document.getElementById("day").innerHTML = date
  document.getElementById("time").innerHTML = time
}