// what a bunch of fucking assholes
$().ready(function() {
  if ($('meta[content="Posterous"]')) {
    $("<style type='text/css'>a#posterous_footerbar{ display: none }</style>").appendTo("head");
  }
});


// I want to use this file to do a hack version of RescueTime.

// probably I'll issue a GET against a non-existent gif, return a 1x1 invisipixel, and use the
// specifics of the phony request on the server end to ascertain the URL and the timestamp.

// you know what else would be an interesting use of dotjs? include in here a hook to a web service
// which receives the URL (window.location.href) and gives you both a Facebooky "Like" and a less
// corporate-sanitary-Singaporean "Hate" to go with it. then throw it into "Like" and "Hate" bins
// and let the web service predict whether it should show you links based on your anticipated
// reaction.

