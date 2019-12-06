// Countdown script inspired from W3school website:
// https://www.w3schools.com/howto/howto_js_countdown.asp

var weddingDate = "July 9, 2020"; 
var weddingTime = "19:00:00";

// Set the date we're counting down to
var countDownDate = new Date(weddingDate + " " + weddingTime).getTime();

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

  // Display the result in the element with id="countdown"
  if (distance > 0) {
    document.getElementById("countdown-days").innerHTML = days;
    document.getElementById("countdown-hrs").innerHTML = hours;
    document.getElementById("countdown-mins").innerHTML = minutes;
    document.getElementById("countdown-secs").innerHTML = seconds;
  }
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We got married on " + weddingDate;
  }
}, 1000);
