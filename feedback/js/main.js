$(document).ready(function() {

    $('.ks_flags i').click(function() {
        $(this).removeClass('fa-flag-o');
        $(this).addClass('fa-flag');
    });



    $('ul.ks_tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.ks_tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    $('ul.ks_policy_tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.ks_policy_tabs li').removeClass('current');
            $('.tab-content_policy').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })
        // Quick & dirty toggle to demonstrate modal toggle behavior
    $('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
})