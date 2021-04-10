$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header .header-2').addClass('header-active');
        }else{
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.controls .buttons').click(function(){

        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.dish .image').show(400);
        }else{
            $('.dish .image').not('.'+filter).hide(200);
            $('.dish .image').filter('.'+filter).show(400);
        }

    });

    //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
    $(".sandwich1-overlay, .sandwich1-content").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close, .popup-overlay").on("click", function() {
    $(".sandwich1-overlay, .sandwich1-content").removeClass("active");
  });

});