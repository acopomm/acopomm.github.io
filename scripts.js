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

window.addEventListener("load", function() {
  const form = document.getElementById('dataform');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      msgchange();
    })
  });
});
