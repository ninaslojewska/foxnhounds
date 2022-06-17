
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});

$("button").ready(function () {
  $("#enter").fadeIn(2000);
});


$("button").ready(function () {
  $("main>img").delay(1000).fadeIn(2000);
});

$("button").ready(function () {
  $("main>a").delay(1000).fadeIn(2000);
});

$(document).ready(function () {
  $("#reveal").hide();
      $("#enter").click(function () {
          $('#hidden').fadeOut("slow", function () {
              var div = $("#hidden").hide();
              $('#reveal').fadeIn("slow", function () {
                  $("#reveal").css({
                      visibility: 'visible'
                  });
                  $('html, body').css({
                      overflow: 'auto',
                      height: 'auto'
                  });
              });
          });

      });
  });

