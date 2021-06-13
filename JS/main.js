$(document).ready(function(){
    $nav=$('.navigation-main');
    $toggleCollapse=$('.toggle-collapse');
    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});