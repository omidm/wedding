
// to hide the navbar collapse after click. 
// http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
$( document ).ready(function() {


  $('.nav a').on('click', function(){
      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click() //bootstrap 3.x by Richard
   });

});
