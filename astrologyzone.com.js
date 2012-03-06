// embarassing to have this in my repo, but it should still be readable

$(document).ready(function() {
  var text = $("span.text")[0];
  $("body").html(text);
  $("body").css("margin-left", "20px");
  $("p").css("width", "80%");
  $("img").remove();
});
