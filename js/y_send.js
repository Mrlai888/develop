function fixed() {
    $('.y_fix').append('<a href="javascript:;" class="fix">' + localStorage.getItem('fix') + '</a>')
    $('.y_fix .fix').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
fixed();