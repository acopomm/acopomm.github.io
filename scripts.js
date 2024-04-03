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

function msgchange(a){
  document.getElementById("rating").innerHTML = a
  document.getElementById("day").innerHTML = day
  document.getElementById("month").innerHTML = month
  document.getElementById("year").innerHTML = year
  document.getElementById("time").innerHTML = time
}

<form 
  method="POST" 
  action="https://script.google.com/macros/s/AKfycbz_-XWAgqAsp_kCxu_8RW4FcBw2d89JAaqemGZWiDatW9HS2HB2F1fN1lOtVltMDsu-/exec"
>
  <input name="Day" type="email" placeholder="Email" required>
  <input name="Name" type="text" placeholder="Name" required>
  <button type="submit">Send</button>
</form>
