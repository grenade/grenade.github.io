$(document).ready(function() {
 var p = parseInt(window.location.hash.substring(2));
 $("#book").touchwipe({
  wipeLeft: function() { $('html, body').animate({ scrollTop: $('#p' + (p - 1)).offset().top }, 'slow'); },
  wipeRight: function() { $('html, body').animate({ scrollTop: $('#p' + (p + 1)).offset().top }, 'slow'); },
  wipeUp: function() { $('html, body').animate({ scrollTop: $('#p' + (p - 1)).offset().top }, 'slow'); },
  wipeDown: function() { $('html, body').animate({ scrollTop: $('#p' + (p + 1)).offset().top }, 'slow'); },
  min_move_x: 20,
  min_move_y: 20,
  preventDefaultEvents: true
 });
});