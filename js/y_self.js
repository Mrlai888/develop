function Insert() {
    $('.y_more').append('     <a href="javascript:;">' + localStorage.getItem('more') + '</a>')
    $('.y_more .more').css({
        " font-size": "18px",
        "font-weight": "bold"
    })
}
Insert();


(function() {


    $('.login_block .but1').click(function() {

        var reg = /^(1)\d{10}$/

        // console.log($(' .wrap_number .phoneNumber').val());

        var result = Res(reg, $(' .wrap_number .phoneNumber').val())
        if (!result) { return }

        if (result) {
            // if(localStorage.getItem('user')){

            // }
            localStorage.setItem('username', $(' .wrap_number .phoneNumber').val())

            $('  .auto_code').css({
                'display': 'block'

            })
            $('.login_block .but1').css('display', 'none')
            $('.login_block .but2').css('display', 'block')
            var str = ''
            for (var i = 0; i < 4; i++) {
                str += randomInt(0, 10)
            }
            $('.auto_code span').html(str)
            localStorage.setItem("res", str)


        }
    });


    var arr = {
        "注册产品": "y_login.html",
        "真伪查询": "y_taf.html",
        "自助服务": "y_self.html",
        "寄送快修": "y_send.html"
    }



    $('.login_block .but2').click(function() {
        if ($('.auto_code .code').val() == localStorage.getItem('res')) {
            // if (localStorage.getItem('user')) { //验证用户名
            for (var item in arr) {
                if (localStorage.getItem('more') === item || localStorage.getItem('fix') === item) { //根据标记跳到指定页面
                    location.href = arr[item]
                }
            }
            // } else {
            //     $('.login_block .content').html('该用户名未注册')
            // }


        } else {
            $('.login_block .content').html('验证码输入错误')
        }
        $('.login_block .but1').css('display', 'block')
        $('.login_block .but2').css('display', 'none')
    });

    function Res(reg, val) {
        if (!val) {
            return
            alert('输入不能为空')
        }

        var res = reg.test(val)
        if (!res) {
            $('.login_block .content').html('输入手机号码错误')
        }
        return res
    };


})()