$(document).ready(function() {

    var panelOne = $('.form-panel.two').height(),
      panelTwo = $('.form-panel.two')[0].scrollHeight;
    $('.form').animate({
      'height':panelOne
    });
  
    $('.form-panel.two').not('.form-panel.two.active').not('.form-panel.two.two-two').on('click', function(e) {
      // e.preventDefault();
      $('.form-toggle').not('.form-toggle.toggle-two').addClass('visible');
      $('.form-panel.one').addClass('hidden');
      $('.form-panel.two').not('.form-panel.two.two-two').addClass('active');
      $('.form-panel.two.two-two').addClass('hidetwo-two');
      $('.form').animate({
        'height': panelTwo
      }, 200);
    });
    $('.form-panel.two.two-two').on('click', function(e) {
        // e.preventDefault();
        $('.form-toggle.toggle-two').addClass('visible');
        $('.form-panel.one').addClass('hidden');
        $('.form-panel.two-two').addClass('active');
      $('.form-panel.two').not('.form-panel.two.two-two').addClass('hidetwo');        
        $('.form').animate({
          'height': panelTwo
        }, 200);
      });
  
    $('.form-toggle').on('click', function(e) {
      // e.preventDefault();
      $(this).removeClass('visible');
      $('.form-panel.one').removeClass('hidden');
      $('.form-panel.two').removeClass('active');
      $('.form-panel.two').removeClass('hidetwo');
      $('.form-panel.two').removeClass('hidetwo-two');
      $('.form-panel.two-two').removeClass('active');
      $('.form').animate({
        'height': panelOne
      }, 200);
    });
  });