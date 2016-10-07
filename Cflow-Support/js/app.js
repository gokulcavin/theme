$(document).ready(function(){
    $('.menu-top i').click(function(){
        $('aside').show();
    });
    $('aside .menu-main-side h2 i').click(function(){
        $('aside').hide();
    });
    $('.op-tick').click(function(){
        $('.open-ticket').fadeIn(300);
        $('.closed-ticket').fadeOut(300);
    });
    $('.clo-tick').click(function(){
        $('.closed-ticket').fadeIn(300);
        $('.open-ticket').fadeOut(300);
    });
    $('.open-close-btn .ope-clo').click(function(){
        $('.open-close-btn .ope-clo').removeClass('active');
        $(this).addClass('active');

    })
})
