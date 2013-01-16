$("body").css("background-color", "white").
          css("background-image", "none");

// I can't believe the motherfucker who wrote this book also wrote this HTML
$.each([".book", ".sect1"], function(index, element) {
  $(element).css("width", "80%").
             css("margin-left", "5%");
});

