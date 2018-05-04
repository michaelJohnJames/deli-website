//Allows link to specific accordion tab
$(document).ready(function () {
  location.hash && $(location.hash + '.collapse').collapse('show');
  $(".nav-item .dropdown-item").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
