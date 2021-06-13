$(document).ready(function(){
    $nav=$('.navigation-main');
    $toggleCollapse=$('.toggle-collapse');
    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});
// typing effect
var typed = new Typed("#typed", {
    stringsElement: "#string-type",
    typeSpeed: 50,
    loop: true,
  });
  
  var typed = new Typed("#typed1", {
    stringsElement: "#string-type1",
    typeSpeed: 110,
    loop: true,
  });
  