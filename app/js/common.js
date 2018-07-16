$(function() {


	$('.left__pannel_menu_button').on('click', function (e) {
        $(this).toggleClass('menu_active')
    })

    var doc_height = $(document).height() - 80;

	$('.left_section_slider, .right_section_slider').css('height', doc_height);
    $('.slider_item_img').css('height', doc_height);
    var owl = $('.slider');
	owl.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        onInitialized: function(e) {
            $('.counter').text('1 / ' + this.items().length);

        }

    });
    owl.owlCarousel().on('changed.owl.carousel', function(event) {
        $('.counter').text(++event.page.index + ' / ' + event.item.count);
        var this_index = event.page.index;
        $(".right_section_slider_content_head:nth-child(" + this_index + ")").addClass("active");
        $(".right_section_slider_content_head:nth-child(" + (this_index + 1) + ")").removeClass("active");
        $(".right_section_slider_content_head:nth-child(" + (this_index - 1) + ")").removeClass("active");

    });

    $('canvas').constellation({
        star: {
            width: 3
        },
        line: {
            color: 'rgba(255, 255, 255, .5)'
        },
        length: (window.innerWidth / 6),
        radius: (window.innerWidth / 5)
    });
    });
