$(document).ready(function(){

  
  $(function(){                                   //scroll
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
    });
   
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      $('.preloader').addClass('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 5000);

    $('.slider-p2').owlCarousel({                // slider
      margin:10,
      dots:false,
      navText: ['<img src="img/l-arr.png" >', '<img src="img/r-arr.png" >'],
      nav:true,
      loop:true,
      dotsEach: 1,
      responsiveClass:true,
      responsive:{
          0:{ items:1 },
          768:{ items:2 },
          1020:{ items:2 },
          1200:{ items:2 },
          1500:{ items:2 }
               
  }
  });

    

    $('.btn-call, .btn-sl-comment').click(function(){
        $('.fon-pop').show(300);
    });
    $('.close').click(function(){
        $('.fon-pop').hide(300);
    });

    $('.btn-d3').click(function(){
      let imgHome =  $(this).parent().parent();
     $(imgHome).find('.plane').css('display', 'none');
     $(imgHome).find('.d3').css('display', 'block');  
     $(imgHome).find('.btn-plan').css('backgroundColor', 'transparent');
     $(imgHome).find('.btn-d3').css('backgroundColor', '#edf2f9');
       
     });
    $('.btn-plan').click(function(e){
    let imgHome =  $(this).parent().parent();
    $(imgHome).find('.d3').css('display', 'none');
    $(imgHome).find('.plane').css('display', 'block');  
    $(imgHome).find('.btn-plan').css('backgroundColor', ' #edf2f9');
    $(imgHome).find('.btn-d3').css('backgroundColor', 'transparent');
    });
  
    


    $('.menu-button').click(function(){
      $('.box-hidden').toggle(300);
  });

    
    $('.userphone').inputmask({"mask": "+7(999) 999-99-99"}); //маска телефона

    $('.form-call, .form-pop').each(function(){               
          
        $(this).validate({                                   
          errorPlacement: function(error, element) {
            return true;
        },
          rules: {
            dow:{
              required: true,
              },
              userphone:{
                required: true,
                },
            }, 
          submitHandler(form) {
            let th = $(form);
    
            $.ajax({
              type: 'POST',
              url: 'order.php',
              data: th.serialize(),
              
            }).done(() => {
              
              th.trigger('reset');
             $(".fon-pop").css('display' , 'none');
                          
            alert("Спасибо! Ваше сообщение успешно отправлено.   Мы свяжемся с Вами в длижайшее время. Проследите, пожалуйста, за доступностью Ваших средств связи.")
              
            });
    
            return false;
          }
        });
    });

   
    const hr1 = $('.hr1');
    const hr2 = $('.hr-p3');
    const hr3 = $('.hr2');
    const hr4 = $('.hr3');
    let count = 0;
    $(window).scroll(function() {
  let scroll = $(window).scrollTop() + $(window).height();
  let offhr1 = hr1.offset().top
  let offhr2 = hr2.offset().top
  let offhr3 = hr3.offset().top
  let offhr4 = hr4.offset().top
 
  if (scroll > offhr1 && count == 0) {
    $('.hr1').addClass('active');
    count = 0;
    }
    if (scroll > offhr2 && count == 0) {
      $('.hr-p3').addClass('active');
      count = 0;
      }
      if (scroll > offhr3 && count == 0) {
        $('.hr2').addClass('active');
        count = 0;
        }
        if (scroll > offhr4 && count == 0) {
          $('.hr3').addClass('active');
          count = 0;
          }
})


}); // end scripts