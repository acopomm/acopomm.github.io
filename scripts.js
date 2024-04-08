function tymsg() { 
    document.getElementById("thanku").style.opacity = "100";
    setTimeout(() => {
      document.getElementById("thanku").style.opacity = "0"
    }, 1000)
  }

{
  var d = new Date()
  var day = d.getDate()
  var month = d.getMonth()
  var year = d.getFullYear()  
  var time = d.getHours()
}

function rating(r) {
  return r
}

function rate(a) {
  document.getElementById("dataform").reset();
  document.getElementById(a).value="1"
  document.getElementById('submitbutton').click();
}


