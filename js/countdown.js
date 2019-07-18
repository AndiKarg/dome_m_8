var aktDate = new Date();
var beginDate = new Date(aktDate.getFullYear(), aktDate.getMonth(), aktDate.getDate(), '16', '0', '0');
var endDate = new Date(aktDate.getFullYear(), aktDate.getMonth(), aktDate.getDate(), '20', '0', '0');

if (aktDate > endDate) {
    var countDownDate = new Date(aktDate.getFullYear(), aktDate.getMonth(), aktDate.getDate()+1, '16', '0', '0').getTime();
}

if ((aktDate > endDate) && aktDate.getDay() == 4) {
    var diff = 7 - aktDate.getDay(); 
    var countDownDate = new Date(aktDate.getFullYear(), aktDate.getMonth(), aktDate.getDate()+diff, '16', '0', '0').getTime();
}

else if (aktDate.getDay() == 5 || aktDate.getDay() == 6) {
    var diff = 7 - aktDate.getDay(); 
    var countDownDate = new Date(aktDate.getFullYear(), aktDate.getMonth(), aktDate.getDate()+diff, '16', '0', '0').getTime();
}

else if (aktDate < beginDate) {
    var countDownDate = new Date(aktDate.getFullYear(), aktDate.getMonth(), aktDate.getDate(), '16', '0', '0').getTime();
}
else {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We are currently <h3>Live!</h3>";
    var countDownDate = new Date().getTime();
}

// Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hours = ((hours < 10) ? "0" + hours: hours);
  minutes = ((minutes < 10) ? "0" + minutes: minutes);
  seconds = ((seconds < 10) ? "0" + seconds: seconds);

  // Display the result in the element with id="countdown"
  if (distance > 0) {
  document.getElementById("countdowndays").innerHTML = "Live again in: </br>" + days + " days";
  document.getElementById("countdown").innerHTML = hours + " :  "  + minutes + " : " + seconds;
  }

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We are currently <h3>Live!</h3>";
  }
}, 1000);