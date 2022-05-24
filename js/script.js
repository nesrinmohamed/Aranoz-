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
    
    //search
    $('#search').click(function(){
        $('.form-group').slideToggle(400)
    })
    $('.close').click(function(){
        $('.form-group').slideUp(400)
    })

    //btnUp
    $(window).scroll(function(){
        let wScroll = $(window).scrollTop();
        // console.log(wScroll)
        if(wScroll >= 550){
            $('.butUp').fadeIn(400);
        }else{
            $('.butUp').fadeOut(400);
        }
    }) 
    $('.butUp').click(function(){
        // $(window).scrollTop(0)
        $('html,body').animate({scrollTop: '0'})
    })
    // animate section
    $('.navbar .nav-link').click(function(){
        let aHref = $(this).attr("href")
        console.log(aHref);
        $('html , body').animate({scrollTop:$(aHref).offset().top-120}, 1000 )

    })
})

