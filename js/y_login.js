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
        window.open("y_pay.html", "_blank")
    })
})()