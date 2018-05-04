//Allows link to specific accordion tab
$(document).ready(function () {
  location.hash && $(location.hash + '.collapse').collapse('show');
});
