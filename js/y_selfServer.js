function Insert() {
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
Insert();
$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
})