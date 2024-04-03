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
  document.getElementById(a).value="1"
  document.getElementById('dataform').submit();
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
      tymsg();
    })
  });
});
