$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass('sticky');
            $(".goUp").fadeIn();
        }
        else{
            $(".navbar").removeClass('sticky');
            $(".goUp").fadeOut();
        }
    });   

    $(".goUp").click(function(){scroll(0,0)});

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });


    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{enabled:true}
    });
    

    $(window).on("scroll", function() {

        var currentPos = $(window).scrollTop();
        var navHeight = $('.navbar').outerHeight() - 1;

        $('.navbar-menu a').each(function() {
            var sectionLink = $(this);
            var section = $(sectionLink.attr('href'));
            
            if(section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
                $('.navbar-menu a').removeClass('highlight');
                sectionLink.addClass('highlight');
            }
            else {
                sectionLink.removeClass('highlight');
            }
        });

    });


});

