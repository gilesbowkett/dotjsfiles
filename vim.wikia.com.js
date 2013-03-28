// great source of information, but saturated with bullshit. this
// approach gets rid of most of the worst bullshit, but certainly not
// all of it

$(document).ready(function() {
  var text = $("#WikiaPage")[0];
  $("body").html(text);
  $("body").css("margin-left", "20px");
  $("p").css("width", "80%");
});

