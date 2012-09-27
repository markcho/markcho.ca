$(document).ready(function() {
  var username = "mbhcho";
  var hostname = "uwaterloo.ca";
  $("#email_link").attr("href", "mail" + "to:" + username + "@" + hostname).text(username + "@" + hostname);

  var nav = $("#nav");
  var spacer = $("#spacer");
  var fixed = "fixed";
  var fixed_spacer = "fixed_spacer";
  function navToggle() {
    nav.toggleClass(fixed);
    spacer.toggleClass(fixed_spacer);
  }

  window.onscroll = function() {
    if (window.pageYOffset >= 162) {
      if (!nav.hasClass(fixed)) {
        navToggle();
      }
    } else {
      if (nav.hasClass(fixed)) {
        navToggle();
      }
    }
  }
});
