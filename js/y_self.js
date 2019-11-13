function Insert() { //动态添加subject
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
Insert();


(function() {
    var arr = {
            "注册产品": "y_login.html",
            "真伪查询": "y_taf.html",
            "自助服务": "y_selfServer.html",
            "支付查询": "y_pay.html",
            "寄送快修": "y_send.html",
            "预约维修": "y_reserve.html"
        } //静态添加

    function strCode() { //验证码随机数
        var str = ''
        for (var i = 0; i < 4; i++) {
            str += randomInt(0, 10)
        }
        $('.auto_code span').html(str)
        localStorage.setItem("res", str)
    }


    function Res(reg, val) { //输入框 正则判断
        if (!val) {
            return
            alert('输入不能为空')
        }

        var res = reg.test(val) //接收判断结果
        if (!res) {
            $('.login_block .content').html('输入手机号码错误')
        }
        return res
    };


    $('.login_block .but1').click(function() {
        //电话号码正则
        var reg = /^(1)\d{10}$/
            // console.log($(' .wrap_number .phoneNumber').val());
        var result = Res(reg, $(' .wrap_number .phoneNumber').val()) //获取输入框的值（电话号码）
        if (!result) { //不符合是结束程序
            return
        }
        if (result) {
            // if(localStorage.getItem('user')){
            // }
            localStorage.setItem('username', $(' .wrap_number .phoneNumber').val()) //把电话号码保存到本地 存储
            $('  .auto_code').css({ //验证码框block
                'display': 'block'
            })
            $('.login_block .but1').css('display', 'none')
            $('.login_block .but2').css('display', 'block')
            strCode()

            $('.login_block .but2').click(function() {
                // console.log($('.auto_code .code').val());
                // 判断验证码是否正确 并判断是否返回去改动了用户名
                if ($('.auto_code .code').val() == localStorage.getItem('res') && Res(reg, $(' .wrap_number .phoneNumber').val())) {

                    // if (localStorage.getItem('user')) { //验证用户名
                    for (var item in arr) {
                        if (localStorage.getItem('more') === item || localStorage.getItem('fix') === item) { //根据标记跳到指定页面
                            location.href = arr[item]

                        }
                    }
                    // } else {
                    //     $('.login_block .content').html('该用户名未注册')
                    // }
                    $('.login_block .but1').css('display', 'block')
                    $('.login_block .but2').css('display', 'none')

                } else {
                    localStorage.setItem('username', $(' .wrap_number .phoneNumber').val()) //如果改动用户名则重新把用户名保存本地返回去判断
                    strCode()
                    $('.login_block .content').html('验证码或手机号码输入错误')
                    $('.login_block .but1').css('display', 'none')
                    $('.login_block .but2').css('display', 'block')

                }

            });
        }


    });

})();
$('.Jin_hide_content').mouseleave(function() {
    $(this).css('display', 'none')
})
$('.Jin_hide_content_ding').mouseleave(function() {
    $(this).css('display', 'none')
})