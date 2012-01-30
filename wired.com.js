_WiredDotJS = {}

$(document).ready(function() {

  // here's what sucks about this. asynch loading basically breaks the dotjs paradigm.
  // this code simply waits a second, literally, before removing a bunch of page noise
  // bullshit to make the site readable. it is fragile beyond words, because in the
  // event that one of these asynch loads takes longer than a second, you have to run
  // this stuff all over again. that's why it creates a globally accessible function
  // called _WiredDotJS.removeAllKindsOfAggravatingUnnecessaryCrapFromWiredDotCom.

  _WiredDotJS.removeAllKindsOfAggravatingUnnecessaryCrapFromWiredDotCom = function() {
    $("#sidebar").hide()
    $("iframe").hide()
    $("#fb-root").hide()
    $(".linker_content").hide()
    $("#header").hide()
    $("#extra_navigation").hide()
    $("#global_navigation").hide()
    $("#post_nav").hide()
    $("#story-ribbon-black-carpet").hide()
    $(".advertisement").hide()
    $(".subscriptionUnit").hide()
  }

  setTimeout(_WiredDotJS.removeAllKindsOfAggravatingUnnecessaryCrapFromWiredDotCom, 1000);

});

