const responsive={
  0:{
    items:1
  },
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
}
$(document).ready(function(){
    $nav=$('.navigation-main');
    $toggleCollapse=$('.toggle-collapse');
    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
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
    //owl-carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      responsive: responsive
    });
    // top scroller button
    $(".tpscrl-btn span").click(function(){
      $("html,body").animate({
        scrollTop:0
      },1000);
    })
    // scroll in animation
    AOS.init();
  });