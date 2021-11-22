var myLazyLoad = new LazyLoad();
VANTA.DOTS({
    el: ".intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xf120ff,
    color2: 0x1F2032,
    backgroundColor: 0x1F2032,
    size: 3.60,
    spacing: 21.00
  })
VANTA.NET({
    el: "#particles-js",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xc0c0c0,
    backgroundColor: 0x1f2032,
    points: 4,
    maxDistance: 25.00,
    
  })
  AOS.init({
    offset: 250,
    duration: 1000,
    delay: 150,
    wait:0,
    once: true,
});
$(document).ready(function() {
  (function accordion() {
      $(".faq-title").click(function(){
          $(this).toggleClass("open").next().slideToggle();
          $(".faq-title").not(this).removeClass("open").next().slideUp();
      });
  }());
  (function scrollLink() {
      $(".header__navigation nav ul li a, .footer__navigation nav ul li a").click(function() {
          var elementClick = $(this).attr("href")
          var destination = $(elementClick).offset().top;
          jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
          }, 1500);
          return false;
      });
    }());
    $('.header-burger').click(function () {
        $('.header__navigation nav').toggleClass('burger-active');
        $('.header-burger span').toggleClass('header-burger__revert');
        $('.header__button').toggleClass('hidden-btn');
        $('.header .container').toggleClass('container-active');
        if($('.header-burger span').hasClass('header-burger__revert')){
            $('html').addClass('hidden');
        } else{
            $('html').removeClass('hidden');
        }
    });
    $('.header__navigation nav a').click(function () {
        $('html').removeClass('hidden');
        $('.header-burger span').removeClass('header-burger__revert');
        $('.header__navigation nav').removeClass('burger-active');  
        $('.header__navigation nav').removeClass('burger-active'); 
        $('.header__button').removeClass('hidden-btn');
        $('.header .container').removeClass('container-active');
    });
});


