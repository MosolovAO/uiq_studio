$(function() {

	$('.left__pannel_menu_button').on('click', function (e) {
        $(this).toggleClass('menu_active')
    })

    var doc_height = $(document).height() - 80;

	$('.sec_2').css('height', doc_height);
});
