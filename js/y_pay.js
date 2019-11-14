function Insert() {
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
Insert();



$('.y_pay_page .but').click(function() {
    // $('.y_pay_page span').text('输入错误')
    var reg_txt = /^(1)\d{10}$/;
    var reg_code = /^[0-9a-zA-Z]{4}$/;
    var reg_note = /^\d{6}$/;
    var result1 = check(reg_txt, $('.y_pay_page .txt').val())

    if (!result1) {
        $('.y_pay_page span').text('手机号码输入错误')
        return
    }
    // var result2 = check(reg_code, $('.y_pay_page .code').val())
    // if (!result2) {
    //     $('.y_pay_page span').text('验证码输入错误')
    //     return
    // }
    var result3 = check(reg_note, $('.y_pay_page .note').val())
    if (!result3) {
        $('.y_pay_page span').text('短信验证失败')
        return
    }
    if (result1 && result3) {
        location.href = './servers.html'
    }
})


function check(reg, val) {
    if (!val) {
        // alert('密码不能为空')
        return

    }
    var res = reg.test(val)
    if (res) {
        $('.y_pay_page span').text('√')
    } else {
        $('.y_pay_page span').text('输入错误')
    }
    return res

};


$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
})