$(document).ready(function(){
    $('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      //dropdown
      $(".dropdown").hover(function(){
          $(".dropdown-menu").slideToggle(500)
      })

    //   Navbar
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    console.log(wScroll)
    if(wScroll >= 150){
        $('.navbar').addClass('bgColor');
    }else{
        $('.navbar').removeClass('bgColor');
    }
})
//countdown
$('.countdown').dsCountDown({
    endDate:new Date("May 24, 2022 23:59:00")
    });
    
})

