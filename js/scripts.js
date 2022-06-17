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

