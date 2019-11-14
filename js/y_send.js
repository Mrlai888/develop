function fixed() {
    $('.y_fix').append('<a href="javascript:;" class="fix">' + localStorage.getItem('fix') + '</a>')
    $('.y_fix .fix').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
fixed();
$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
})

$('.fix_from button').click(function() {
    location.href = './servers.html'
})