$(document).ready(function() {
    $('.pp_tabs-wrapper').each(function() {
        let ths = $(this);
        ths.find('.pp_tab-item').not(':first').hide(0);
        ths.find('.pp_tab').click(function() {
            ths.find('.pp_tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.pp_tab-item').hide(0).eq($(this).index()).fadeIn(0)
        }).eq(0).addClass('active');
    });
});