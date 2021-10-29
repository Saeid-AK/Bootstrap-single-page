// Set the date we're counting down to
var countDownDate = new Date("August 17, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML =
  //   '<span id="days">' +
  //   days +
  //   "</span>" +
  //   '<span id="hours">' +
  //   hours +
  //   "</span>" +
  //   '<span id="minutes">' +
  //   minutes +
  //   "</span>" +
  //   '<span id="seconds">' +
  //   seconds +
  //   "</span>";

  // Display the result in the element with class="demos"
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="days">' +
      days +
      "</span>" +
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }
  // If the count down is finished, write some text
  if (distance < 0) {
    // by id
    // clearInterval(x);
    // document.getElementById("demo").innerHTML = "";

    // by class
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }

    // by id
    // document
    //   .getElementById("after-expire")
    //   .setAttribute("id", "offer-expire-text");

    // by class
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expire-text");
    }
    // by id
    // document.getElementById("offer-expire-text-inner").innerHTML =
    //   "پیشنهاد ویژه این محصول به پایان رسیده!";
    // by class
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
    }
    // by id
    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    // by class
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);
// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    items: 4,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTime: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: true,
      },
    },
  });
});
// brands owlCarousel

$(".tt").tooltip("show");

$(".po").popover("show");
