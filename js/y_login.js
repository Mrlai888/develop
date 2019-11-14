function Insert() {
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
};
Insert();


(function() {
    $(' .y_login_page .but').click(function() {
        if (localStorage.getItem('username') === 'login') {
            location.href = './y_pay.html'
        } else {
            window.open("jy_login.html", "_blank")
        }

    })
})();




$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
})