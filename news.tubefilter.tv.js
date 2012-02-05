_TubefilterDotJS = {}

$(document).ready(function() {

  // copied from the aggravating Wired hack (wired.com.js)

  _TubefilterDotJS.removeAllKindsOfAggravatingUnnecessaryCrapFromTubefilter = function() {
    $(".singlesidebar").hide()
    $(".singlepost").css("margin-left", "35px")
  }

  setTimeout(_TubefilterDotJS.removeAllKindsOfAggravatingUnnecessaryCrapFromTubefilter, 1000);

});

