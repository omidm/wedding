
$( document ).ready(function() {
     
  function scrollToAnchor(aid){
        var aTag = $("h1[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
  }
  
  $("#rsvp-link").click(function() {
        scrollToAnchor('rsvp');
  });

  $("#memory-link").click(function() {
        scrollToAnchor('memory');
  });

  $("#location-link").click(function() {
        scrollToAnchor('location');
  });

  $("#home-link").click(function() {
        scrollToAnchor('home');
  });

});
