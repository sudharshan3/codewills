$("#owl-demo").owlCarousel({
    navigation : true
  });

$(function () {
    $(".owl-carousel").owlCarousel();
    
    
});

$('.home_slider').owlCarousel({
    loop:true,
    animateOut: 'fadeOutLeft',
    animateIn: 'fadeInRight',
    nav:false,
    autoplay:true,
    dots:false,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        }
       
    }
})
$('.testi_cards').owlCarousel({
    loop:true,
    nav:false,
    margin:5,
    autoplay:true,
    dots:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        }
       
    }
})











$('.serviceland_slider').owlCarousel({
    loop:true,
    animateIn: 'flipInX',
    nav:false,
    autoplay:true,
    dots:false,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        }
       
    }
})

$('.priceslider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
    dots:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        }
       
    }
})
$('.port_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        }
       
    }
})
$('.blog_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
       
    }
})

$('.testimonial').owlCarousel({
    
    margin:0,
    loop:true,
    nav:false,
    autoplay:true,
    dots:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.client_slider').owlCarousel({
    
    margin:10,
    loop:true,
    nav:false,
    autoplay:true,
    dots:false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('.hiretalents_slider').owlCarousel({
    margin:0,
    loop:true,
    nav:false,
    autoplay:true,
    dots:false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
})











