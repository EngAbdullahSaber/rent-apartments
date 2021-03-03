
 $(function () {
  "use strict";
  $('.collapsible').collapsible();
  $(".collapsible").collapsible({accordion: false});
  $('select').formSelect();


  $("body").niceScroll({cursorborder:"",autohidemode:false,cursorcolor:"#003781",boxzoom:true});
  $(window).on('load', function() {

  });

  
  $.seamlessRolling({liHeight: 60});

  $.seamlessRolling({
      el: '.testList',
      speed: 12,
      direction: 1
  });

});





