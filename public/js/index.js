//Allows link to specific accordion tab
$(document).ready(function() {
  location.hash && $(location.hash + '.collapse').collapse('show');

//Makes dropdown disappear when clicked on link
  $(".nav-item").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

//Makes dropdown disappear when clicking on dropdown item
  $(".dropdown-item").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
