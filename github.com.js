// the dashboard
// $("div.news").hide();

// the blog
$("#posts").css("margin-left", "10px")
$(".sidebar").hide()

// add a network link to the graphs list
var link_to_network_graph = $("ul.tabs li:contains('Network') a").attr("href");

if ("" != link_to_network_graph) {
  if ($("ul.tabs li:contains('Graphs') a").hasClass("selected")) {
    $(".subnav-bar ul").append("<li><a href='" + link_to_network_graph + "'>Network</a></li>")
  }
}

