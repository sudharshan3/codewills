$(function () {
    
    "use strict";
    
    //===== Prealoder
    function hideLoader() {
        $('#preloader').hide();
    }
    $(window).ready(hideLoader);
    setTimeout(hideLoader,20*5000);
    
    
    
    //===== Sticky
    $( window ).load(function() {
        var type = $('.navbar-area').attr('data-link');

        if (type == 'darkbg'){
            $('.tbtn').on("click",function(){
                var clicks = $(this).data('clicks');
            if (clicks) {
                $(".navbar-area").addClass("navbar-dark").delay( 400 );
                
                setTimeout(function(){
                    $(".navbar-area").removeClass("sticky-top");
                    $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/logo-white.png");
              },500);
               
            } else {
                $(".navbar-area").addClass("sticky-top");
                $(".navbar-area").removeClass("navbar-dark");
                $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/logo-dark.png");
            }
            $(this).data("clicks", !clicks);
                
            });
            $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/logo-white.png");  
        }
        else{
            $('.tbtn').on("click",function(){
                var clicks = $(this).data('clicks');
            if (clicks) {
                $(".navbar-area").addClass("fixed-top").delay( 400 );
                setTimeout(function(){
                    // $(".navbar-area").removeClass("sticky");
                    $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/logo-dark.png");
              },500);
            } else {
                $(".navbar-area").addClass("sticky");
                $(".navbar-area").removeClass("fixed-top");
                $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/logo-dark.png");
            }
            $(this).data("clicks", !clicks);
                
            });
        }   
    });

        $(window).on('scroll', function (event) {
            var scroll = $(window).scrollTop();
            if (scroll > 50 ) {
                $('#back-to-top').fadeIn(); 
            
            }
            else{
                $('#back-to-top').fadeOut();
            }
        });
    
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        var type = $('.navbar-area').attr('data-link');
        
       
        if (type == 'serviceheader'){
            if (scroll < 20 )  {
                $(".navbar-area").removeClass("sticky");
                $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/logo-dark.png");
                $(".super_header").css('display','flex');
            } else {
                $(".navbar-area").addClass("sticky");
                $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/logo-dark.png");
                $(".super_header").css('display','none');   
            }

        }  
    });
    //======== accordion_arrow
//     let down_arrow = $('.listaccordion span');
//     down_arrow.on('click',function(){
//       $(this).html('expand_less');
//   });

  $('.listaccordion').on('click', function() {
    var click = $(this).data('clicks');

    if (click) {
        $(this).children().last().html('expand_more');
    }else{
        $(this).children().last().html('expand_less');
    };

    $(this).data('clicks', !click); // you have to set it

});

    $('.counter_count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
    //===== scroll smooth
    
    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault()
      
    //     $('html, body').animate(
    //       {
    //         scrollTop: $($(this).attr('href')).offset().top,
    //       },
    //       500,
    //       'linear'
    //     )
    // })
    
});


// $(window).scroll(function() {
//     var hT = $('#whychooseus').offset().top,
//         hH = $('#whychooseus').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       
//     } 
   
//  });
$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
            
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");

});

//=================================== pricing popup

$('#pricingpopup').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var plan = button.data('plan')
    var value = button.data('price')
    var category = button.data('category')
    var modal = $(this)
    modal.find('#price_head').text(plan+" Plan")
    modal.find('#price_value').text(value)
    modal.find('#plan_type').val(plan)
    modal.find('#price_category').text(category)
  
  })

  $('#hirenowform').on('show.bs.modal', function (event) {
    
    var button = $(event.relatedTarget) 
    var plan = button.data('plan')
    var value = button.data('price')
    var category = button.data('category')
    var color = button.data('color')
    var modal = $(this)
   
    modal.find('#price_head').text(plan+" Plan")
    modal.find('#price_value').text(value)
    modal.find('#plan_type').val(plan)
    modal.find('#price_category').text(category)

   
    
  })



function showMore(){
    var morelem = $('.seconedset');
    var icon = $('.morebtn h1 i');
    var moretext = $('.morebtn small');

 
    if (morelem.css('display') === 'none') {
        morelem.fadeIn();
        icon.replaceWith("<i class='fas fa-minus-circle'></i>");
        moretext.text("Show Less");
    } 
    else{
        morelem.fadeOut();
        icon.replaceWith("<i class='fas fa-plus-circle'></i>");
        moretext.text("Show More");
    }
}

// function expandlarge(){
//         $('.expandbtn').parent().parent().addClass("col-lg-12").removeClass("col-lg-3");
//         $('.expandbtn').parent().addClass("expanded_card fadedgreen");
//         $('.expandprice').fadeIn();
//         $('.expandbtn').fadeOut();
// }


// function changeperiod(type,pnum){
    
    


//     if (type == 'month'){
//         $('.m_button'+pnum).addClass('active');
//         $('.h_button'+pnum).removeClass('active');
//         $('.jnr_price'+pnum).html('$299<span class="period">/month</span>');
//         $('.mid_price'+pnum).html('$399<span class="period">/month</span>');
//         $('.snr_price'+pnum).html('$599<span class="period">/month</span>');
        
     
//     }else
//     if (type == 'hour'){
//         $('.m_button'+pnum).removeClass('active');
//         $('.h_button'+pnum).addClass('active');
//         $('.jnr_price'+pnum).html('$14<span class="period">/hour</span>');
//         $('.mid_price'+pnum).html('$20<span class="period">/hour</span>');
//         $('.snr_price'+pnum).html('$25<span class="period">/hour</span>');
//     }

    
// }

$('.nav-link').on('click',function(){
    $(this).addClass('.text-secondary').removeClass('text-dark')
});


  $(function () {
   $(document).ready(function(){
    $.get('https://api.first.org/data/v1/countries',function(countries){
        console.log(countries);
        $.each(countries.data,function(key,value){
            $('.country-select')
                .append($("<option></option>")
                    .attr("value", value.country)
                    .text(value.country));
        });
    });
    $.getJSON('./assets/js/services.json',function(services){
        console.log(services);
        $.each(services,function(key,value){
            $('#service-select')
                .append($(" <option></option>")
                .attr("value", value.name)
                .text(value.name));
        });
    });


   
  
  


});

  })
   

