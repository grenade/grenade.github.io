$(document).ready(function() {
 $('#l' + window.location.hash.substring(2)).addClass('active');
 if(window.location.hash.substring(0,1) != '#') { location.href = '#p1'; }
 function hashChanged(hash) {
  $('a').removeClass("active");
  $('#l' + hash.substring(2)).addClass('active');
 }
 if ("onhashchange" in window) { window.onhashchange = function () { hashChanged(window.location.hash); } }
 else {
  var storedHash = window.location.hash;
  window.setInterval(function () {
   if (window.location.hash != storedHash) {
    storedHash = window.location.hash;
    hashChanged(storedHash);
   }
  }, 100);
 }
 $('#prev').click(function(){ location.href = '#p' + (Math.max(parseInt(window.location.hash.substring(2)), 2) - 1); })
 $('#next').click(function(){ location.href = '#p' + (Math.min(parseInt(window.location.hash.substring(2)), 8) + 1); })
});