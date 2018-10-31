$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000          // Integer: Time between slide transitions, in milliseconds
  });

  $(".rslides__portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true          // Boolean: Show pager, true or false
  });
  
Visibility.onVisible(function(){
  setTimeout(function() {
    $('.introduction__title').addClass('animated fadeInDown');
  }, 400);
  setTimeout(function() {
    $('.quote-extern').addClass('animated fadeInDown');
  }, 800);
  setTimeout(function() {
    $('.introduction .btn').addClass('animated fadeInDown');
  }, 1200);
  setTimeout(function() {
    $('.animate').addClass('animated fadeInDown');
  }, 1600);

  setTimeout(function() {
    $('.introduction-intern__title').addClass('animated fadeInDown');
  }, 400);
  setTimeout(function() {
    $('.introduction-intern p').addClass('animated fadeInDown');
  }, 800);
  setTimeout(function() {
    $('.intern-animate').addClass('animated fadeInDown');
  }, 1200);
});