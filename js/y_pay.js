function Insert() {
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
Insert();


// var txt = $('.y_pay_page .txt').val()
// var code = $('.y_pay_page .code').val()
// var note = $('.y_pay_page .note').val()

$('.y_pay_page .but').click(function() {
    // $('.y_pay_page span').text('输入错误')
    var reg_txt = /^(1)\d{10}$/;
    var reg_code = /^[0-9a-zA-Z]{4}$/;
    var reg_note = /^\d{4}$/;
    var result1 = check(reg_txt, $('.y_pay_page .txt').val())
    console.log(result1);

    if (!result1) { return }
    var result2 = check(reg_code, $('.y_pay_page .code').val())
    console.log(result2);
    if (!result2) { return }
    var result3 = check(reg_note, $('.y_pay_page .note').val())
    if (!result3) { return }
    if (result1 && result2 && result3) {
        location.href = 'https://www.baidu.com'
    }
})


function check(reg, val) {
    if (!val) {
        return
        alert('密码不能为空')
    }
    var res = reg.test(val)
    if (res) {
        $('.y_pay_page span').text('√')
    } else {
        $('.y_pay_page span').text('输入错误')
    }
    return res

}